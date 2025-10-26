import { Indumenti } from "./InterfaceIndumenti";

export class Maglia implements Indumenti {
    constructor(
        public colore: string,
        public taglia: string,
        public prezzo: number,
    ) { }
    mostraPrezzo(): string {
    return `Prezzo: ${this.prezzo}`;
    }

    info(): string{
    return `Colore: ${this.colore}, Taglia: ${this.taglia}`;
}
    
}