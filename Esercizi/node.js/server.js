//creare un ws-rest che consenta di esporre le seguenti api:
//get di tutti gli iscritti
//post nuovo corso
//ricerca corso per nome

//creare un'applicazione web che consenta di visualizzare una tabella di iscritti, creare un corso, ricercare un corso in base al nome
 
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'palestra'
});

db.connect(err => {
    if (err) {
        console.error("Errore di connessione: " + err);
        return;
    }
    console.log("Connesso al database");
});


app.get('/utenti', (req, res) => {
    const query = 'SELECT * FROM persona';
    db.query(query, (err, results) => {
        if (err) {
            console.error("Errore di query: " + err);
            return res.status(500).send('Errore del server');
        }
        res.json(results);
    });
});


app.post('/create/utenti', (req, res) => {
    const { cf, nome, cognome, genere, professione, data_nascita } = req.body;

    const query = `
        INSERT INTO persona (cf, nome, cognome, genere, professione, data_nascita) 
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [cf, nome, cognome, genere, professione, data_nascita], (err, results) => {
        if (err) {
            console.error("Errore di query:", err);
            return res.status(500).send('Errore del server');
        }

        res.status(201).json({
            message: "Utente creato",
            utente: { cf, nome, cognome, genere, professione, data_nascita }
        });
    });
});

app.post('/create/corso', (req, res) => {
    const { codice_corso, nome, difficolta, codice_sala, codice_istruttore } = req.body;

    const query = `
        INSERT INTO corso (codice_corso, difficolta, nome, codice_sala, codice_istruttore) 
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(query, [codice_corso, difficolta, nome, codice_sala, codice_istruttore], (err, results) => {
        if (err) {
            console.error("Errore di query:", err);
            return res.status(500).send('Errore del server');
        }

        res.status(201).json({
            message: "Corso creato con successo",
            corso: { codice_corso, nome, difficolta, codice_sala, codice_istruttore }
        });
    });
});


app.get('/corsi/ricerca', (req, res) => {
    const { nome } = req.query;
    const query = 'SELECT * FROM corso WHERE nome LIKE ?';

    db.query(query, [`%${nome}%`], (err, results) => {
        if (err) {
            console.error("Errore di query:", err);
            return res.status(500).send('Errore del server');
        }

        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});
