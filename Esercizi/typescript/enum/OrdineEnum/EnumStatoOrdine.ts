export enum StatoOrdine{
inPreparazione = "in preparazione",
annullato = "cancellato",
spedito = "spedito",
consegnato = "consegnato",
}

export class Ordine{
    private id: number;
    private stato: StatoOrdine;

    constructor(
        id: number,
        stato: StatoOrdine,
    ){
        this.id =id;
        this.stato = StatoOrdine.inPreparazione;
    }
    aggiornaStato(nuovoStato: StatoOrdine){
        this.stato = nuovoStato;
    }

    stampaDettagli():void{
        console.log(this.stato)
    }
}