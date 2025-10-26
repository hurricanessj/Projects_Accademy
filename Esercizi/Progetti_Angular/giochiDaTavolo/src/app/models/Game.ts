export interface BoardGame {
    id?: number;
    nome: string
    giocatori_min: number;
    giocatori_max: number;
    durata_minuti: number;
    eta_minima: number;
    categoria: string;
    editore: string;
    anno_pubblicazione: number;
}