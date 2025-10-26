import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-somma',
  templateUrl: './somma.component.html',
  styleUrls: ['./somma.component.css']
})
export class SommaComponent {

  sommaLista: number = 0;
  restituisciSomma(listaNumeri: number[]) {
    for (let i = 0; i < listaNumeri.length; i++) {
      this.sommaLista += listaNumeri[i];
    }
    console.log('somma numerii:',this.sommaLista)
  }




}
