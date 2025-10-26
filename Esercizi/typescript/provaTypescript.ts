/*
Crea un’interfaccia Dipendente con:
nome: string
cognome: string
calcolaStipendio(): number
Crea due classi che implementano l’interfaccia Dipendente:
DipendenteTempoPieno con proprietà aggiuntiva stipendioMensile
DipendentePartTime con proprietà oreLavorate e pagaOraria
Implementa il metodo calcolaStipendio() per ciascuna classe:
Tempo pieno: restituisce stipendioMensile
Part-time: restituisce oreLavorate * pagaOraria
Scrivi una funzione stampaStipendi(dipendenti: Dipendente[]) che stampi nome, cognome e stipendio di ogni dipendente.
*/
interface Dipendente{
    nome: string;
    cognome: string;
    calcolaStipendio(): number;
}


class DipendenteTempoPieno implements Dipendente {
  nome: string;
  cognome: string;
  stipendioMensile: number;

  constructor(nome: string, cognome: string, stipendioMensile: number) {
    this.nome = nome;
    this.cognome = cognome;
    this.stipendioMensile = stipendioMensile;
  }

  calcolaStipendio(): number {
    return this.stipendioMensile;
  }

}


class DipendentePartTime implements Dipendente {
  nome: string;
  cognome: string;
  oreLavorate: number;
  pagaOraria: number;

  constructor(nome: string, cognome: string, oreLavorate: number, pagaOraria: number) {
    this.nome = nome;
    this.cognome = cognome;
    this.oreLavorate = oreLavorate;
    this.pagaOraria = pagaOraria;
  }

  calcolaStipendio(): number {
    return this.oreLavorate * this.pagaOraria;
  }
}

const listaDipendenti: Dipendente[] = [
  new DipendenteTempoPieno("Mario", "Rossi", 2000),
  new DipendentePartTime("Luca", "Bianchi", 80, 15)
];

function stampaStipendi(dipendenti: Dipendente[]): void {
  dipendenti.forEach(dipendente => {console.log(`${dipendente.nome} ${dipendente.cognome} - Stipendio: €${dipendente.calcolaStipendio()}`);});
}

stampaStipendi(listaDipendenti);



