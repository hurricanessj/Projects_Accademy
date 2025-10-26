interface Persona {
    nome: string;
    cognome: string;
    indirizzo: string;
    eta: number;

    getDati(): string;
}

export class Alunno implements Persona {
    constructor(
       public nome: string,
       public cognome: string,
       public eta: number,) { }
    indirizzo: string;
    getDati(): string {
        return `nome: ${this.nome}, cognome: ${this.cognome}, eta: ${this.eta},`
    }

}
