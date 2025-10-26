CREATE TABLE docente (
    id_docente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    cognome VARCHAR(50)
);

CREATE TABLE corso (
    codice_corso INT AUTO_INCREMENT PRIMARY KEY,
    materia VARCHAR(100),
    codice_docente INT,
    FOREIGN KEY (codice_docente) REFERENCES docente(id_docente)
);

CREATE TABLE studente (
    id_studente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    cognome VARCHAR(50),
    codice_corso INT,
    FOREIGN KEY (codice_corso) REFERENCES corso(codice_corso)
);

INSERT INTO docente (nome, cognome) VALUES
('Marco', 'Bianchi'),
('Laura', 'Verdi'),
('Antonio', 'Rossi');


INSERT INTO corso (materia, codice_docente) VALUES
('Matematica', 1),
('Storia', 2),
('Informatica', 3),
('Fisica', 1);


INSERT INTO studente (nome, cognome, codice_corso) VALUES
('Giulia', 'Neri', 1),
('Luca', 'Ferrari', 2),
('Martina', 'Esposito', 3),
('Davide', 'Romano', 1),
('Elisa', 'Gallo', 4),
('Simone', 'Conti', 3);

-- query

SELECT materia from corso;

SELECT corso.materia
FROM corso
INNER JOIN docente ON corso.codice_docente = docente.id_docente
WHERE docente.id_docente = 1;

SELECT *
FROM corso
WHERE codice_docente = 1;

SELECT COUNT(id_studente)
FROM studente
WHERE codice_corso = 1;
