import { Prodotto } from "./Prodotto";
export class Dispositivo implements Prodotto{
        constructor(
        public prezzo: number, 
        public nome: string,
    ){}


}