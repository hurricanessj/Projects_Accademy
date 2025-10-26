import { Component } from '@angular/core';

@Component({
  selector: 'app-visualizza-dettagli',
  templateUrl: './visualizza-dettagli.component.html',
  styleUrls: ['./visualizza-dettagli.component.css']
})
export class VisualizzaDettagliComponent {
  preventivoDaVisualizzare!: any;

  visualizzaPreventivo(preventivo: any) {
    this.preventivoDaVisualizzare = preventivo; 
    console.log( preventivo)
  }


}
