export interface Delivery {
  id: number;
  nominativo: string;
  indirizzo: string;
  prodotto: string;
  dettagli: string;
  codice_consegna: string;
  data: string; 
  consegnato: boolean;
  pagamento: boolean;
}
