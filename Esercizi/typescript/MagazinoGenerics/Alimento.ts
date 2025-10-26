import { Prodotto } from "./Prodotto";

export class Alimento implements Prodotto{
    constructor(
        public prezzo: number, 
        public nome: string,
    ){}

}