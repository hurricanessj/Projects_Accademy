import { Component } from '@angular/core';

@Component({
  selector: 'app-nonscaduti',
  templateUrl: './nonscaduti.component.html',
  styleUrls: ['./nonscaduti.component.css']
})
export class NonscadutiComponent {
  prodottiScaduti!: any[]
  prendiProdotti(prodotti: any[]) {
    this.prodottiScaduti = prodotti;


  }

}
