import { InterfaceDocumento } from "./InterfaceDocumento";

export class Libro implements InterfaceDocumento{
    constructor(
        public titolo: string,
        public autore: string,
        public numeroPagine: number,
    ){}

    info(): string{
        return `Libro: "${this.titolo}" di ${this.autore}, numero di pagine ${this.numeroPagine} pagine.`;
    }
}