export interface Opera {
  id: number;
  titolo: string;
  autore: string;
  stanza: string;
  paeseOrigine: string;
  dataRealizzazione: string;
  stato: "esposta" | "in restauro";
  immagine: string;
  descrizione: string;
}
