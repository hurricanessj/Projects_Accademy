/*

creare un ws rest che consenta di gestire un cinema:
elenco film
elenco sale.
Visualizzare le locandine del film e per ogni film visualizzare i dettagli (ora e sala)
 
Al click su una sala mostrare i dettagli: numero posti 
 
Realizzare il db, BE e FE


Creare le seguenti API:
elenco film                   --->fatto
elenco sale                   --->fatto
getDettagliByFilm             --->fatto
getDettagliSala               --->fatto
*/
const express = require('express')
const mysql = require('mysql')
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())


const port = 3000;
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sale_cinema'
});

db.connect(err => {
    if (err) {
        console.error("errore di connessione" + err);
        return;
    }
    console.log("connesso al database");
})


app.get('/getFilm', (req, res) => {
    const query = 'SELECT * FROM film';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            return res.status(500).send('Errore del server');
        }
        res.json(results);
    });
});

app.get('/getSale', (req, res) => {
    const query = 'SELECT * FROM sale';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            return res.status(500).send('Errore del server');
        }
        res.json(results);
    });
});

app.get('/getSalaById/:id', (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM sale WHERE id_sala = ?;';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error("Errore di query: " + err);
            return res.status(500).send('Errore del server');
        }
        res.json(results);
    });
});

app.get('/getfilmByIdSala/:id', (req, res) => {
    const id = req.params.id;
    const query = 'SELECT film.orario_trasmissione, film.id_film, sale.nome_sala FROM film INNER JOIN sale ON film.id_sala = sale.id_sala WHERE sale.id_sala = ? ;'
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error("Errore di query: " + err);
            return res.status(500).send('Errore del server');
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server in ascolto su porta ${port}`)
})
