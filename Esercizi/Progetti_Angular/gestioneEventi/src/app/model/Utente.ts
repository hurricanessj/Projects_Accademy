export interface Utente {
  id: number;
  nome: string;
  cognome: string;
  username: string;
  pwd: string;
  enumRuolo: 'CANDIDATO' | 'AZIENDA';
}