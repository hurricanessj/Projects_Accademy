export class Magazino<T>{
    private prodotto: T;
    getProdotto(): T{
        return this.prodotto;
    }
    setProdotto(prodotto: T): void{
    this.prodotto = prodotto;
    }
}

