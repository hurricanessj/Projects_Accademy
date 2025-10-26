
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
    database: 'proggettonode'
});

db.connect(err => {
    if (err) {
        console.error("Errore di connessione: " + err);
        return;
    }
    console.log("Connesso al database");
});


app.get('/corsi', (req, res) => {
    const query = 'SELECT * from corso;';
    db.query(query, (err, results) => {
        if (err) {
            console.error("Errore di query: " + err);
            return res.status(500).send('Errore del server');
        }
        res.json(results);
    });
});


app.get('/insegnanti', (req, res) => {
    const query = 'SELECT * from docente;';
    db.query(query, (err, results) => {
        if (err) {
            console.error("Errore di query: " + err);
            return res.status(500).send('Errore del server');
        }
        res.json(results);
    });
});



app.get('/getStudentiByIdCorso/:id', (req, res) => {
    const id= req.params.id;
    const query = 'SELECT COUNT(id_studente) FROM studente WHERE codice_corso = ?;';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error("Errore di query: " + err);
            return res.status(500).send('Errore del server');
        }
        res.json(results);
    });
});


app.get('/getCorsiByIdInsegnante/:id', (req, res) => {
    const id= req.params.id;
    const query = 'SELECT * FROM corso WHERE id_docente = ?;';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error("Errore di query: " + err);
            return res.status(500).send('Errore del server');
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});
