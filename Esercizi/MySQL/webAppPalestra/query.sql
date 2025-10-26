//Tutte le persone che hanno sottoscritto un abbonamento nel mese di marzo
 
//numero di persone attualmente in palestra
 
//numero di persone che seguono un corso
 
//quanti corsi ci sono il martedì in sala 1 e quali corsi ci sono
 
//un istruttore quanti corsi segue
 
 
//una persona che corsi sta seguendo
 
 
//tutte le prsone che fanno karate ed hanno più di 20 anni
 
 
//totale costo abbonamenti di marzo
 
//età media iscritti
 
//quanti corsi ci sono il martedì dalle 10 alle 18
 
//una persona che fa yoga a che ora ha la lezione




SELECT p.*
FROM persona p
JOIN abbonamento a ON p.codice_persona = a.codice_persona
WHERE MONTH(a.data_inizio) = 3;

 
SELECT persona.*, abbonamento.data_inizio, abbonamento.data_fine From persona Join abbonamento on persona.codice_persona = abbonamento.codice_persona where abbonamento.data_fine > CURRENT_DATE;
 
SELECT COUNT(DISTINCT persona.codice_persona) as persone_attive
FROM persona
JOIN abbonamento ON persona.codice_persona = abbonamento.codice_persona
WHERE abbonamento.data_fine > CURRENT_DATE;

select corso.nome from corso join istruttore on corso.codice_istruttore = istruttore.codice_istruttore where istruttore.nome = "Gennaro";

select corso.nome, persona.nome, persona.cognome from persona 
join persona_istruttore.codice_persona on persona.codice_persona = persona_istruttore.codice_persona 
join istruttore on  istruttore on persona_istruttore.codice_istruttore = istruttore.codice_istruttore 
join corso on corso.codice_istruttore where persona.nome ="Alessandro";

select corso.nome, persona.nome, persona.cognome from persona 
join persona_istruttore.codice_persona on persona.codice_persona = persona_istruttore.codice_persona 
join istruttore on  istruttore on persona_istruttore.codice_istruttore = istruttore.codice_istruttore
join corso on corso.codice_istruttore where corso.nome ="Karate" and year(CURRENT_DATE) - year(persona.data_nascita)>20;

select sum(abbonamento.prezzo) from abbonamento where abbonamento .data_inizio like "%-03-%";

select avg(year(CURRENT_DATE)) - year(persona.data_nascita) from persona join abbonamento on persona.codice_persona=abbonamento.codice_persona where abbonamento.data_fine < CURRENT_DATE;

