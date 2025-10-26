import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ordini',
  templateUrl: './ordini.component.html',
  styleUrls: ['./ordini.component.css']
})
export class OrdiniComponent {

  @Input()
  arrayOrdini!: any;

  @Output()
  numero = new EventEmitter()

  contaOrdini() {
    let contatore = 0;
    for (let ordine of this.arrayOrdini) {
      if (ordine.status == 'pronto') {
        contatore++;
      }
    }
    this.numero.emit(contatore)

  }



}
