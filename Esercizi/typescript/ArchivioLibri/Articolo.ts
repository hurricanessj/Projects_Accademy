import { InterfaceDocumento } from "./InterfaceDocumento";

export class Articolo implements InterfaceDocumento {
    constructor(
        public titolo: string,
        public autore: string,
        public rivista: string,
    ) {}
    info(): string {
        return `Articolo: "${this.titolo}" di ${this.autore}, pubblicato su "${this.rivista}".`;
    }
}