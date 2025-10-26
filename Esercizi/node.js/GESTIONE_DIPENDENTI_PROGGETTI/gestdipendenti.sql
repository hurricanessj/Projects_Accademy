CREATE TABLE progetti (
  codice_progetto INT AUTO_INCREMENT PRIMARY KEY,
  titolo VARCHAR(60) NOT NULL,
  obiettivo VARCHAR(100),
  descrizione TEXT,
  deadline DATE
);
 
CREATE TABLE dipendenti (
  codice_dipendente INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  cognome VARCHAR(255) NOT NULL,
  email VARCHAR(100) NOT NULL,
  data_nascita DATE,
  codice_progetto INT,
  role ENUM('dipendente', 'manager') NOT NULL DEFAULT 'dipendente',
  FOREIGN KEY (codice_progetto) REFERENCES progetti(codice_progetto)
);



-- Progetto 1: Piattaforma eCommerce
INSERT INTO dipendenti (nome, cognome, email, data_nascita, codice_progetto, role) VALUES
('Luca', 'Marini', 'luca.marini@example.com', '1985-04-12', 1, 'manager'),
('Andrea', 'Costa', 'andrea.costa@example.com', '1994-06-20', 1, 'dipendente'),
('Marco', 'Ferrari', 'marco.ferrari@example.com', '1993-10-05', 1, 'dipendente'),
('Chiara', 'Romano', 'chiara.romano@example.com', '1992-12-11', 1, 'dipendente');

-- Progetto 2: Sistema Gestione Dipendenti
INSERT INTO dipendenti (nome, cognome, email, data_nascita, codice_progetto, role) VALUES
('Giulia', 'Greco', 'giulia.greco@example.com', '1987-01-23', 2, 'manager'),
('Fabio', 'Ricci', 'fabio.ricci@example.com', '1990-09-15', 2, 'dipendente'),
('Serena', 'Lombardi', 'serena.lombardi@example.com', '1991-03-08', 2, 'dipendente'),
('Davide', 'Fontana', 'davide.fontana@example.com', '1995-07-19', 2, 'dipendente');

-- Progetto 3: App Mobile per Clienti
INSERT INTO dipendenti (nome, cognome, email, data_nascita, codice_progetto, role) VALUES
('Matteo', 'De Luca', 'matteo.deluca@example.com', '1986-08-10', 3, 'manager'),
('Alessia', 'Ferri', 'alessia.ferri@example.com', '1993-11-27', 3, 'dipendente'),
('Gianni', 'Serra', 'gianni.serra@example.com', '1994-05-03', 3, 'dipendente'),
('Francesca', 'Moretti', 'francesca.moretti@example.com', '1992-02-14', 3, 'dipendente');

-- Progetto 4: Chatbot Intelligente (nessun partecipante ancora)
INSERT INTO progetti (titolo, obiettivo, descrizione, deadline)
VALUES ('Chatbot Intelligente', 'Automatizzare risposte AI', 'Creazione di un chatbot conversazionale intelligente.', '2025-12-31');

-- Dipendenti senza progetto
INSERT INTO dipendenti (nome, cognome, email, data_nascita, role)
VALUES 
('Laura', 'Rossi', 'laura.rossi@example.com', '1990-03-17', 'manager'), -- PM senza progetto
('Stefano', 'Conti', 'stefano.conti@example.com', '1996-04-22', 'dipendente'), -- Dev senza progetto
('Marta', 'Bianchi', 'marta.bianchi@example.com', '1997-01-10', 'dipendente'); -- Dev senza progetto




--query

--1 dato un progetto permetta di assegnare un solo PM e 3 sviluppatori.
--2 dato un progetto visualizza i partecipanti e i dettagli del progetto.
--3 Dato un dipendente visualizza il progetto a cui partecipa


--1
-- Recupera l'ID del progetto "Chatbot Intelligente"
SELECT codice_progetto FROM progetti WHERE titolo = 'Chatbot Intelligente';

-- Supponendo che il codice_progetto sia 4, aggiorniamo i dipendenti
UPDATE dipendenti SET codice_progetto = 4 
WHERE email IN (
  'laura.rossi@example.com',  -- PM
  'stefano.conti@example.com', 'marta.bianchi@example.com',  -- Dev 1 e Dev 2
  'gianni.serra@example.com'  -- prendiamo 1 sviluppatore da un altro progetto per test
);

--2

SELECT 
  p.titolo,
  p.obiettivo,
  p.descrizione,
  p.deadline,
  d.nome,
  d.cognome,
  d.email,
  d.role
FROM progetti p
JOIN dipendenti d ON p.codice_progetto = d.codice_progetto
WHERE p.codice_progetto = 4;

--3
SELECT 
  d.nome,
  d.cognome,
  d.email,
  p.titolo AS titolo_progetto,
  p.obiettivo,
  p.deadline
FROM dipendenti d
JOIN progetti p ON d.codice_progetto = p.codice_progetto
WHERE d.email = 'laura.rossi@example.com';