CREATE TABLE autore (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cognome VARCHAR(100) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    nazionalita VARCHAR(100),
    dataNascita DATE,
    luogoNascita VARCHAR(100),
    dataMorte DATE,
    luogoMorte VARCHAR(100)
);


CREATE TABLE romanzo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    autore INT NOT NULL,
    titolo VARCHAR(255) NOT NULL,
    anno_di_pub INT,
    prezzo DECIMAL(10, 2),
    scheda TEXT,
    FOREIGN KEY (autore) REFERENCES autore(id)
);


CREATE TABLE personaggio (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cognome VARCHAR(100),
    descrizione VARCHAR(50)
);


CREATE TABLE personaggioRomanzo (
    personaggio INT NOT NULL,
    romanzo INT NOT NULL,
    descrizione TEXT,
    PRIMARY KEY (personaggio, romanzo),
    FOREIGN KEY (personaggio) REFERENCES personaggio(id),
    FOREIGN KEY (romanzo) REFERENCES romanzo(id)
);


INSERT INTO autore (id, cognome, nome, nazionalita, dataNascita, luogoNascita, dataMorte, luogoMorte) VALUES
(1, 'Verne', 'Jules', 'Francese', '1828-02-08', 'Nantes', '1905-03-24', 'Amiens'),
(2, 'Austen', 'Jane', 'Britannica', '1775-12-16', 'Steventon', '1817-07-18', 'Winchester'),
(3, 'Orwell', 'George', 'Britannica', '1903-06-25', 'Motihari', '1950-01-21', 'Londra'),
(4, 'Hemingway', 'Ernest', 'Americana', '1899-07-21', 'Oak Park', '1961-07-02', 'Ketchum'),
(5, 'Eco', 'Umberto', 'Italiana', '1932-01-05', 'Alessandria', '2016-02-19', 'Milano'),
(6, 'Rowling', 'J.K.', 'Britannica', '1965-07-31', 'Yate', NULL, NULL),
(7, 'Hugo', 'Victor', 'Francese', '1802-02-26', 'Besançon', '1885-05-22', 'Parigi'),
(8, 'Dickens', 'Charles', 'Britannica', '1812-02-07', 'Portsmouth', '1870-06-09', 'Gads Hill'),
(9, 'Calvino', 'Italo', 'Italiana', '1923-10-15', 'Santiago de Las Vegas', '1985-09-19', 'Siena'),
(10, 'Camus', 'Albert', 'Francese', '1913-11-07', 'Drean', '1960-01-04', 'Villeblevin');


INSERT INTO romanzo (id, autore, titolo, anno_di_pub, prezzo, scheda) VALUES
(1, 1, 'Viaggio al centro della Terra', 1864, 15.50, 'Romanzo di avventura e fantascienza.'),
(2, 2, 'Orgoglio e pregiudizio', 1813, 12.99, 'Classico della letteratura romantica.'),
(3, 3, '1984', 1949, 14.00, 'Distopia politica e sociale.'),
(4, 4, 'Il vecchio e il mare', 1952, 11.00, 'Storia simbolica sulla lotta dell’uomo.'),
(5, 5, 'Il nome della rosa', 1980, 18.20, 'Thriller storico ambientato in un monastero.'),
(6, 6, 'Harry Potter e la pietra filosofale', 1997, 13.50, 'Inizio della saga magica.'),
(7, 7, 'I miserabili', 1862, 16.75, 'Grande affresco sulla società francese.'),
(8, 8, 'Oliver Twist', 1838, 13.10, 'Critica sociale e romanzo di formazione.'),
(9, 9, 'Il barone rampante', 1957, 12.40, 'Favola filosofica.'),
(10, 10, 'Lo straniero', 1942, 10.50, 'Esistenzialismo e alienazione.');


INSERT INTO personaggio (id, nome, cognome, descrizione) VALUES
(1, 'Axel', 'Lidenbrock', 'Protagonista giovane e curioso.'),
(2, 'Elizabeth', 'Bennet', 'Intelligente e ironica protagonista femminile.'),
(3, 'Winston', 'Smith', 'Impiegato che si ribella al sistema totalitario.'),
(4, 'Santiago', NULL, 'Vecchio pescatore coraggioso.'),
(5, 'Guglielmo', 'da Baskerville', 'Frate investigatore nel Medioevo.'),
(6, 'Harry', 'Potter', 'Ragazzo mago destinato a grandi cose.'),
(7, 'Jean', 'Valjean', 'Ex-galeotto in cerca di redenzione.'),
(8, 'Oliver', 'Twist', 'Orfano gentile e sfortunato.'),
(9, 'Cosimo', 'Piovasco di Rondò', 'Vive sugli alberi per tutta la vita.'),
(10, 'Meursault', NULL, 'Indifferente e freddo protagonista.');


INSERT INTO personaggioRomanzo (personaggio, romanzo, descrizione) VALUES
(1, 1, 'Assistente e narratore del viaggio.'),
(2, 2, 'Protagonista femminile del romanzo.'),
(3, 3, 'Critico del Grande Fratello.'),
(4, 4, 'Combatte contro la sfortuna e il mare.'),
(5, 5, 'Indaga su una serie di omicidi misteriosi.'),
(6, 6, 'Scopre di essere un mago e inizia la scuola.'),
(7, 7, 'Si redime grazie all’amore e alla fede.'),
(8, 8, 'Vittima di abusi, trova protezione e amicizia.'),
(9, 9, 'Simbolo di ribellione filosofica.'),
(10, 10, 'Uomo disinteressato alla morale sociale.');

1.
SELECT * FROM romanzo WHERE anno_di_pub = 2009;

2.
SELECT * FROM romanzo WHERE anno_di_pub >= 1990;

3
SELECT * FROM romanzo WHERE anno_di_pub BETWEEN 1901 AND 2000;

4
SELECT a.nome, a.cognome, r.titolo
FROM romanzo r
JOIN autore a ON r.autore = a.id;

5
SELECT a.nome, a.cognome, r.titolo
FROM romanzo r
JOIN autore a ON r.autore = a.id
ORDER BY a.cognome, a.nome;

6
SELECT a.nome, a.cognome, r.titolo
FROM romanzo r
JOIN autore a ON r.autore = a.id
WHERE a.nazionalita = 'Russa'
ORDER BY a.cognome, a.nome;


7
SELECT r.titolo
FROM romanzo r
JOIN autore a ON r.autore = a.id
WHERE YEAR(a.dataNascita) BETWEEN 1901 AND 2000
ORDER BY a.cognome, a.nome, r.anno_di_pub;

8
SELECT r.titolo, r.anno_di_pub
FROM romanzo r
JOIN autore a ON r.autore = a.id
WHERE a.dataMorte IS NULL;


9
SELECT r.*
FROM romanzo r
JOIN autore a ON r.autore = a.id
WHERE a.dataMorte IS NULL OR a.luogoMorte = 'Torino';

10
SELECT r.titolo, r.anno_di_pub
FROM romanzo r
JOIN autore a ON r.autore = a.id
WHERE a.luogoNascita = 'Roma';

11
SELECT * FROM romanzo WHERE titolo LIKE 'Tokyo%';

12
SELECT * FROM romanzo WHERE titolo LIKE '%Sposi%';

13
SELECT * FROM romanzo
WHERE SUBSTRING(titolo, LENGTH(titolo) - 1, 1) = 'i';

14
SELECT * FROM romanzo WHERE titolo LIKE '%blues';

15
SELECT * FROM romanzo
WHERE anno_di_pub BETWEEN 1901 AND 2000 AND titolo LIKE '%Zeno%';

16
SELECT * FROM romanzo
WHERE anno_di_pub < 1900 AND titolo LIKE '%sposi%';

17
SELECT r.*
FROM romanzo r
JOIN autore a ON r.autore = a.id
WHERE a.nome = 'Alessandro' AND a.cognome = 'Manzoni';

18
SELECT DISTINCT r.titolo
FROM romanzo r
JOIN autore a ON r.autore = a.id
WHERE a.nome = 'Don' AND a.cognome = 'DeLillo';

19
SELECT r.*
FROM romanzo r
JOIN personaggioRomanzo pr ON r.id = pr.romanzo
JOIN personaggio p ON pr.personaggio = p.id
WHERE p.nome = 'Benjamin' AND p.cognome = 'Malaussène';

20
SELECT * FROM romanzo r
LEFT JOIN autore a ON r.autore = a.id
WHERE a.id IS NULL;
