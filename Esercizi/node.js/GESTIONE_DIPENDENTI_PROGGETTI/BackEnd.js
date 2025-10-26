const express = require('express')
const mysql = require('mysql')
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const port = 3000;
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestione_database'
});


db.connect(err => {
    if (err) {
        console.error("errore di connessione" + err);
        return;
    }
    console.log("connesso al database");
})

/*
dato un progetto permetta di assegnare un solo PM e 3 sviluppatori
dato un progetto visualizza i partecipanti e i dettagli del progetto
dato un dipendente visualizza il progetto a cui partecipa
*/

app.get('/progetti/:id/partecipanti', (req, res) => {
    const id = req.params.id;
    const query = `
        SELECT 
            p.codice_progetto, p.titolo, p.obiettivo, p.descrizione, p.deadline,
            d.nome, d.cognome, d.email, d.role
        FROM progetti p
        LEFT JOIN dipendenti d ON p.codice_progetto = d.codice_progetto
        WHERE p.codice_progetto = ?;
    `;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            return res.status(500).send('Errore del server');
        }
        res.json(results);
    });
});


app.get('/dipendenti/:id/progetto', (req, res) => {
    const id = req.params.id;
    const query = `
        SELECT 
            d.nome, d.cognome, d.email,
            p.titolo AS titolo_progetto, p.obiettivo, p.deadline
        FROM dipendenti d
        LEFT JOIN progetti p ON d.codice_progetto = p.codice_progetto
        WHERE d.codice_dipendente = ?;
    `;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            return res.status(500).send('Errore del server');
        }
        res.json(results);
    });
});


app.post('/progetti/assegna', (req, res) => {
    console.log('BODY RICEVUTO:', req.body); // Debug

    const progettoId = parseInt(req.body.id_prog);
    const pm_id = parseInt(req.body.pm_id);
    const sviluppatori = req.body.sviluppatori || [];

    const sviluppatoriArray = Array.isArray(sviluppatori) ? sviluppatori.map(Number) : [parseInt(sviluppatori)];

    if (!progettoId || !pm_id || sviluppatoriArray.length !== 3) {
        return res.status(400).send('Fornire id progetto, un PM e 3 sviluppatori.');
    }

    const query = `
        UPDATE dipendenti
        SET codice_progetto = ?
        WHERE codice_dipendente IN (?, ?, ?, ?)
    `;

    db.query(query, [progettoId, pm_id, ...sviluppatoriArray], (err) => {
        if (err) {
            console.error('Errore nella query:', err);
            return res.status(500).send('Errore del server');
        }
        res.send('Dipendenti assegnati con successo al progetto');
    });
});


app.listen(port, () => {
    console.log(`Server in ascolto su porta ${port}`)
})
