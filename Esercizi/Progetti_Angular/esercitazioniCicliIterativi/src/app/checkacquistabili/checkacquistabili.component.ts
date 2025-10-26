import { Component } from '@angular/core';

@Component({
  selector: 'app-checkacquistabili',
  templateUrl: './checkacquistabili.component.html',
  styleUrls: ['./checkacquistabili.component.css']
})
export class CheckacquistabiliComponent {

  prodottiAcquistabili!: any[];
  prodottiNonAcquistabili!: any[];
  caricaListe(prdna: any[], prda: any[]) {
    this.prodottiAcquistabili = prda;
    this.prodottiNonAcquistabili = prdna;


  }
}
