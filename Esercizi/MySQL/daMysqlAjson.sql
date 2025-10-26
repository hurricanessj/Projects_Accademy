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




select * from visite_mediche where data like "%-10-%"
SELECT visite_mediche.* , medici.nome as medico , medici.cod_fiscale 
FROM visite_mediche JOIN medici on visite_mediche.cod_medico = medici.cod_fiscale where medici.nome = "Francesco";

select count(*) from visite_mediche where esito=""

