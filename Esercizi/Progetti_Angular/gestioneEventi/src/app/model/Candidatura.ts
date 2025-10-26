import { OffertaLavoro } from "./OffertaLavoro";
import { Utente } from "./Utente";

export interface Candidatura {
  id?: number;
  dataCandidatura: string;
  statoCandidatura: 'INVIATA' | 'ACCETTATA' | 'RIFIUTATA';
  utente: Utente;
  offerta: OffertaLavoro;
}