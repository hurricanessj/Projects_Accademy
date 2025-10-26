import {Veicolo} from "./InterfaceVeicolo";

export class Macchina implements Veicolo{
    constructor(
       public marca: string,
       public modello: string,
       public numRuote: number,) { }
    getDettagli(): string {
        return `Marca: ${this.marca}, Modello: ${this.modello}, Numero Ruote: ${this.numRuote}`;
    }
}