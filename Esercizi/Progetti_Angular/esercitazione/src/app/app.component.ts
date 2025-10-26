import { Component,  ViewChild } from '@angular/core';
import { ElettrodomesticiComponent } from './elettrodomestici/elettrodomestici.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  categoriaPresa!: any
  
  saluta(saluto: string) {
    console.log(saluto)
  }

  utenti = [
    { nome: "Gaetano", cognome: "Esposito", age: 20 },
    { nome: "giuseppe", cognome: "Esposito", age: 21 },
    { nome: "nicola", cognome: "Esposito", age: 22 },
    { nome: "saverio", cognome: "Esposito", age: 23 }

  ]

  riceviDati(messaggio: any) {

    console.log(messaggio)
  }

  listaEl: string[] = ["telefono", "phone", "lavatrice"];

  @ViewChild(ElettrodomesticiComponent) lista !: ElettrodomesticiComponent

  ngAfterViewInit() {
    this.lista.popolaLista(this.listaEl)
  }


}
