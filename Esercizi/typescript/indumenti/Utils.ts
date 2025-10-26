import { Indumenti } from "./InterfaceIndumenti";

export function stampaDettagli<T extends Indumenti>(indumento: T): void{
    console.log(indumento.info(), indumento.mostraPrezzo());
}