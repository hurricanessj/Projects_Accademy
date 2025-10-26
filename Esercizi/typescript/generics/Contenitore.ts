export class Contenitore<T>{
    private valore: T;
    constructor(valore: T){
        this.valore = valore;
    }
    get(): T{
        return this.valore;
    }
    set(valore: T): void{
        this.valore = valore;
    }

    descrizione(): string{
        return `la classe contiene un valore di tipo: ${typeof this.valore}`;
    }
}