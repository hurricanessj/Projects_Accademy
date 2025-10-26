import { InterfaceDocumento } from "./InterfaceDocumento";
export class GenericArchivio<T extends InterfaceDocumento>{
    private contenuto: T;

    getContenuto(): T | undefined{
        return this.contenuto;
    }

    setContenuto(contenuto: T): void{
        this.contenuto = contenuto;
    }

    info() : string{
        return `tipo: ${this.contenuto.info()}`;
    }
}