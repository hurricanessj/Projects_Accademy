export enum Ruolo{
    studente = "accesso limitato",
    docente = "accesso limitato",
    amministratore = "accesso admin"
}


function verificaAccesso(utente: Ruolo): void{
    if(utente == Ruolo.amministratore){
        console.log(utente)
    }else{
        console.log(utente)
    }
    
}

let doc: Ruolo = Ruolo.docente;

verificaAccesso(doc)
