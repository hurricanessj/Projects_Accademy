import { Component, Input } from '@angular/core';
import { Iutente } from './Model/Iutente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app2PerInput';
  /*
  
    utenti: Iutente[] = [
      {nome: 'Gaetano', cognome: 'Esposito', eta:20, color:'green'},
     {nome: 'Gennaro', cognome: 'Esposito', eta:26, color:'red'}
  ]
  mostraCognomeUtenti = true;
  
  
  esercizio upper lower
  utente = { nome: 'Enzo' }
  utenteClonato !:{ nome: string };
  ngOnInit(){
    this.utenteClonato = {...this.utente}
  }
  
  esercizio telefono squillo
  messaggioDaInviare : string = 'messaggio di prova';
  messaggioPerFiglio !: string;
  rispostaDelFiglio !: string;
  
  inviaMessaggio(){
    this.messaggioPerFiglio = this.messaggioDaInviare;
  }
  
  riceviRisposta(messaggio: string){
    this.rispostaDelFiglio = messaggio;
  }
  
  //Input
  nomeUtente = 'Gaetano';
 
  //Output
  riceviSaluto(messaggio: string) {
    console.log('Ricevuto:', messaggio);
  }
  
  */


  mostraMenu: boolean = false;
  toggleMenu() {
    this.mostraMenu = !this.mostraMenu;
  }
  data = new Date();


  utenti: any[] = [
    { nome: 'simone', cognome: 'esposito' },
    { nome: 'gaetnao', cognome: 'esposito' },
    { nome: 'gennaro', cognome: 'di pietro' }
  ];


  @Input()
  genere!: string;
  
  film: { genere: string; titolo: string }[] = [
  { genere: 'giallo', titolo: 'Assassinio Sull Oriente Express' },
  { genere: 'storico', titolo: 'Troy' },
  { genere: 'storico', titolo: '1984' },
  { genere: 'azione', titolo: 'jhon wick' },
  { genere: 'azione', titolo: 'american sniper' },
  { genere: 'giallo', titolo: 'knives out' },
];


}
