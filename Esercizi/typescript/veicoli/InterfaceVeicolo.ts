export interface Veicolo{
    marca: string;
    modello: string;
    numRuote: number;

    getDettagli(): string;
}