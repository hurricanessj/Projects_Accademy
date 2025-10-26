import { Candidatura } from "./Candidatura";
import { Utente } from "./Utente";

export interface OffertaLavoro {
  id?: number;
  titolo: string;
  descrizione: string;
  azienda: string;
  dataPubblicazione: string;
  stato: 'APERTA' | 'CHIUSA';
  utenteAzienda: Utente;
  candidature?: Candidatura[]; 
}