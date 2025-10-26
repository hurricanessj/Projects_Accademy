export interface Utente {
    nome: string;
    cognome: string;
    email: string;
}

export class Studente implements Utente {
    constructor(
        public nome: string,
        public cognome: string,
        public email: string,
    ){}

    saluti(): void{
        console.log(`ciao: ${this.nome},${this.cognome}.`)
    }

}