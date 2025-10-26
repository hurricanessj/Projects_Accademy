import { MezzoDiTrasporto } from "./MezzoDiTrasporto";

export class Auto implements MezzoDiTrasporto {
    private numeroPorte: number;
    constructor(
       public nome: string,
       public velocitaMassima: number,
       numeroPorte: number,
    ) {
        this.numeroPorte = numeroPorte;
    }
    public info(): string{
        return`Nome: ${this.nome}, velocita massima: ${this.velocitaMassima} Numero di Porte: ${this.velocitaMassima}`;
    }
    
}