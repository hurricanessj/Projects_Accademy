export interface Ordine {
  id: number;
  numero_ordine: string;
  indirizzo: string;
  telefono: string;
  stato: string;
  prodotti: {
    prodotto_id: number;
    quantità: number;
  }[];
}