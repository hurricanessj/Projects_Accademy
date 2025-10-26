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
    database: 'campo_estivo'
});

db.connect(err => {
    if (err) {
        console.error("errore di connessione" + err);
        return;
    }
    console.log("connesso al database");
})

/*
Creare le seguenti API:
elenco corsi                  ---> fatto
elenco iscritti dato un corso ---> fatto
inserimento corso             ---> fatto
modifica                      ---> fatto
cancellazione                 ---> fatto
*/

app.get('/elencoCorsi', (req, res) => {
    const query = 'SELECT * FROM corsi';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            return res.status(500).send('Errore del server');
        }
        res.json(results);
    });
});


app.get('/getIscrittiByCorso/:id', (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * from persone join corsi on  persone.cod_corso = corsi.cod_corso; ';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            return res.status(500).send('Errore del server');
        }
        res.json(results);
    });
});

app.post('/addCorso', (req, res) => {
    const { nome, cod_corso } = req.body;
    const query = `INSERT INTO corsi (nome, cod_corso) VALUES (?, ?)`;
    db.query(query, [nome, cod_corso], (err, results) => {
        if (err) return res.status(500).send('Errore del server');
        res.json(results);
    });
});



app.put('/corsoUpdate/:id', (req, res) => {
    const { nome } = req.body;
    const id = req.params.id;
    const query = `UPDATE corsi SET nome = ? WHERE id = ?`;

    db.query(query, [nome, id], (err, results) => {
        if (err) {
            console.error("Errore nella query:", err);
            return res.status(500).send('Errore del server');
        }
        res.json(results);
    });
});



app.get('/users/getAll', (req, res) => {
    const query = 'SELECT * FROM persone';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            return res.status(500).send('Errore del server');
        }
        res.json(results);
    });
});


app.get('/users/get/search/:search', (req, res) => {
    const search = req.params.search
    const query = `SELECT * FROM persone WHERE nome LIKE "%${search}%" OR cognome LIKE "%${search}%" OR cellulare LIKE "%${search}%";`
    db.query(query, (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            return res.status(500).send('Errore del server');
        }
        res.json(results);
    });
})


app.post('/users/add', (req, res) => {
    const { nome, cognome, data_di_nascita, cellulare } = req.body
    const query = `INSERT INTO persone(nome, cognome, data_di_nascita, cellulare) VALUES ('${nome}','${cognome}','${data_di_nascita}','${cellulare}') `
    db.query(query, (err, results) => {
        if (err) {
            console.error("errore di query", err);
            return res.status(500).send('errore del server');
        }
        res.json(results);
    })
})

app.put('/users/update/:id', (req, res) => {
    const { nome, cognome, data_di_nascita, cellulare } = req.body
    const id = req.params.id;
    const query = `UPDATE persone SET nome = '${nome}', cognome = '${cognome}', data_di_nascita = '${data_di_nascita}', cellulare = '${cellulare}'  WHERE id='${id}'; `
    db.query(query, (err, results) => {
        if (err) {
            console.error("errore di query", err);
            return res.status(500).send('errore del server');
        }
        res.json(results);
    })
})

app.delete('/deletePersona/:id', (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM persone WHERE id = ?`;
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).send('Errore del server');
        res.json(results);
    });
});


app.delete('/corsoDelete/:cod_corso', (req, res) => {
    const cod = req.params.cod_corso;
    const query = `DELETE FROM corsi WHERE cod_corso = ?`;
    db.query(query, [cod], (err, results) => {
        if (err) return res.status(500).send('Errore del server');
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server in ascolto su porta ${port}`)
})
