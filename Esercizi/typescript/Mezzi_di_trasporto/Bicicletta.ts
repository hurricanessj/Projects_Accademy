import { MezzoDiTrasporto } from "./MezzoDiTrasporto";

export class Bicicletta implements MezzoDiTrasporto {
    private tipo: string;
    constructor(
       public nome: string,
       public velocitaMassima: number,
       tipo: string,
    ) {
        this.tipo = tipo;
     }

    getTipo(): string{
        return this.tipo;
    }

    setTipo(tipo: string): void{
        this.tipo = tipo;
    }

    public info(): string{
        return`Nome: ${this.nome}, velocita massima: ${this.velocitaMassima} Numero di Porte: ${this.tipo}`;
    }
}