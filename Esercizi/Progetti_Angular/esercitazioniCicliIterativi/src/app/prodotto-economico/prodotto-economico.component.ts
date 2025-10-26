import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prodotto-economico',
  templateUrl: './prodotto-economico.component.html',
  styleUrls: ['./prodotto-economico.component.css']
})
export class ProdottoEconomicoComponent {

  @Input()
  listaProdotti!: any[];


  calcoloMigliorMedia() {
    let prezzoP = this.listaProdotti[0]
    for (let elemCorrente of this.listaProdotti) {
      if (elemCorrente.prezzo < prezzoP.prezzo) {
        prezzoP = elemCorrente;
      }
    }
    console.log('miglior prezzo',prezzoP)
  }

}
