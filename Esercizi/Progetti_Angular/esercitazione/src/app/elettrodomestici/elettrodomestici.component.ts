import { Component } from '@angular/core';

@Component({
  selector: 'app-elettrodomestici',
  templateUrl: './elettrodomestici.component.html',
  styleUrls: ['./elettrodomestici.component.css']
})
export class ElettrodomesticiComponent {

  listaElettrodomestici: string[] = []
  offerte: string[]=['phone', 'lavatrice']

  popolaLista(lista: string[]) {
    this.listaElettrodomestici = lista;
  }

}
