import { Ordine } from "./EnumStatoOrdine";
import { StatoOrdine } from "./EnumStatoOrdine";

const ordine1 = new Ordine(1, StatoOrdine.inPreparazione);

console.log("Stato iniziale dell'ordine:");
ordine1.stampaDettagli();

ordine1.aggiornaStato(StatoOrdine.spedito);

console.log("Stato aggiornato dell'ordine:");
ordine1.stampaDettagli();
