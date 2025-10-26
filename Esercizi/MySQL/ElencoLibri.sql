/*
        Elenca tutti i libri presenti nella tabella.
        Mostra solo titolo e autore di ogni libro.
        Trova tutti i libri pubblicati dopo il 1950.
        Elenca tutti i libri di genere “Fantasy”.
        Ordina i libri per anno di pubblicazione in ordine decrescente.
        Ordina i libri per prezzo in ordine crescente.
        Calcola il prezzo medio dei libri presenti nella tabella.
Conta quanti libri ci sono per ogni genere.
        Trova tutti i libri che costano più di 10 euro e sono stati pubblicati prima del 2000.
        Trova tutti i libri il cui autore contiene la parola “Rowling”.
        Aggiorna il prezzo del libro intitolato “1984”.
        Cancella il libro con ID 3.
        Mostra i libri il cui titolo inizia con la lettera “I”.
        Trova il libro più costoso.
Elenca tutti i libri con prezzo compreso tra 10 e 13 euro.
*/

select titolo from libri;

select autore, titolo from libri;

select titolo, autore from libri where anno_pubblicazione > 1950;

select * from libri where genere = "Fantasy"

select * from libri order by anno_pubblicazione ASC;

select * from libri order by prezzo ASC;

select avg(prezzo) from libri;

select genere, count(*) from libri group by genere;

select * from libri where prezzo > 10 and anno_pubblicazione <2000;

select * from libri where autore like "%Rowling%";

update libri set prezzo = 10 where titolo = "1984";

delete from libri where id = 3;

select * from libri where titolo like "I%"

SELECT MAX(prezzo) AS prezzo, titolo FROM libri;




/* esercizio 2 */

create table users(
        id int auto_increment primary key,
        name varchar(40) not null,
        email varchar(50) not null,
        password varchar(50) not null
);

CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    user_id INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
);


INSERT INTO users (name, email, password) VALUES
('Gaetano Rossi', 'gaetano@example.com', 'hashed_password_1'),
('Luca Verdi', 'luca@example.com', 'hashed_password_2'),
('Anna Bianchi', 'anna@example.com', 'hashed_password_3');

INSERT INTO posts (title, content, user_id) VALUES
('Primo Post di Gaetano', 'Questo è il contenuto del primo post.', 1),
('Secondo Post di Gaetano', 'Un altro post interessante.', 1),
('Post di Luca', 'Ciao a tutti dal mio primo post.', 2);


 INSERT INTO comments (content, user_id, post_id) VALUES
('Bravo Gaetano, ottimo post!', 2, 1),
('Mi piace questo argomento!', 3, 1),
('Grazie per aver condiviso!', 1, 3),
('Molto utile, continua così.', 3, 2);


/* eservizio 2*/

SELECT COUNT(*) AS totale_maschi
FROM users
WHERE gender = 'M';

 SELECT COUNT(*) AS totale_maschi FROM studenti WHERE genere = 'M';
 SELECT COUNT(*) AS totale_maschi FROM studenti WHERE genere = 'F';
 
SELECT 
  nome, 
  data_nascita,
  TIMESTAMPDIFF(YEAR, data_nascita, CURDATE()) AS eta
FROM studenti;

SELECT 
  nome, 
  data_nascita,
  20-TIMESTAMPDIFF(YEAR, data_nascita, CURDATE()) AS eta
FROM studenti;

/* 
Progetta un database che gestisca le informazioni relative a:
- Clienti
- Auto
- Noleggi
Requisiti:
1. Ogni cliente ha: un codice identificativo, nome, cognome, data di nascita, patente, telefono.
2. Ogni auto ha: targa, marca, modello, anno di immatricolazione, alimentazione (benzina, diesel, elettrica, ibrida), chilometraggio.
3. Ogni noleggio collega un cliente e un'auto, e include: data inizio, data fine, chilometri percorsi, costo totale.
4. Un cliente può effettuare più noleggi nel tempo.
5. Un'auto può essere noleggiata da clienti diversi in momenti differenti.
query:
- Individua entità, attributi e relazioni.
- Costruisci un diagramma ER.
- Deriva lo schema relazionale SQL.
- Scrivi le query per:
   • Elencare tutti i noleggi effettuati da un cliente.
   • Calcolare i chilometri totali percorsi da ogni auto.
   • Trovare il cliente che ha speso di più.
*/


SELECT id_noleggio from noleggio where id_cliente= 1;

SELECT SUM(km_percorsi) AS km_percorsi, targa FROM noleggi;

SELECT MAX(costo_totale) AS prezzo, id_cliente FROM noleggi;



/*
2)

Progetta una base di dati per un piccolo ospedale che gestisce le informazioni di:
- Pazienti
- Medici
- Reparti
- Visite mediche
Requisiti:
1. Ogni paziente ha: codice identificativo, nome, cognome, data di nascita, codice fiscale e indirizzo.
2. Ogni medico ha: codice identificativo, nome, cognome, specializzazione e reparto di assegnazione.
3. Ogni reparto ha: codice identificativo, nome del reparto e piano dell’edificio.
4. Ogni visita medica è legata a un paziente e a un medico, e include la data, l’orario, la diagnosi e l’esito.
Query:
- Individuare le entità e i loro attributi.
- Identificare le relazioni tra le entità.
- Creare un diagramma ER semplificato.
- Derivare lo schema relazionale per creare le tabelle in SQL.

*/

CREATE TABLE Reparti (
    id_reparto INT PRIMARY KEY AUTO_INCREMENT,
    nome_reparto VARCHAR(50) NOT NULL,
    piano INT NOT NULL
);

CREATE TABLE Medici (
    id_medico INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    cognome VARCHAR(50) NOT NULL,
    specializzazione VARCHAR(100) NOT NULL,
    id_reparto INT NOT NULL,
    FOREIGN KEY (id_reparto) REFERENCES Reparti(id_reparto)
);

CREATE TABLE Pazienti (
    id_paziente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    cognome VARCHAR(50) NOT NULL,
    data_nascita DATE NOT NULL,
    codice_fiscale VARCHAR(20) NOT NULL UNIQUE,
    indirizzo VARCHAR(100)
);

CREATE TABLE Visite (
    id_visita INT PRIMARY KEY AUTO_INCREMENT,
    id_paziente INT NOT NULL,
    id_medico INT NOT NULL,
    data_visita DATE NOT NULL,
    orario_visita TIME NOT NULL,
    diagnosi TEXT NOT NULL,
    esito TEXT NOT NULL,
    FOREIGN KEY (id_paziente) REFERENCES Pazienti(id_paziente),
    FOREIGN KEY (id_medico) REFERENCES Medici(id_medico)
);

INSERT INTO Reparti (nome_reparto, piano) VALUES
('Cardiologia', 2),
('Neurologia', 3),
('Ortopedia', 1);

INSERT INTO Medici (nome, cognome, specializzazione, id_reparto) VALUES
('Luigi', 'Bianchi', 'Cardiologo', 1),
('Carla', 'Verdi', 'Neurologa', 2),
('Marco', 'Rossi', 'Ortopedico', 3);

INSERT INTO Pazienti (nome, cognome, data_nascita, codice_fiscale, indirizzo) VALUES
('Giulia', 'Conti', '1985-07-10', 'CNTGLI85L50H501A', 'Via Roma 12'),
('Paolo', 'De Luca', '1972-02-25', 'DLCPA72B25H501T', 'Viale Europa 77'),
('Sara', 'Mancini', '1990-12-05', 'MNCSRA90T45H501B', 'Corso Italia 33');

INSERT INTO Visite (id_paziente, id_medico, data_visita, orario_visita, diagnosi, esito) VALUES
(1, 1, '2024-11-10', '09:00:00', 'Tachicardia', 'Monitoraggio consigliato'),
(2, 2, '2024-11-11', '10:30:00', 'Cefalea cronica', 'Prescrizione farmaci'),
(3, 3, '2024-11-12', '15:00:00', 'Frattura al polso', 'Inizio fisioterapia');
