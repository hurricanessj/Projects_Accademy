import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-terzo',
  templateUrl: './terzo.component.html',
  styleUrls: ['./terzo.component.css']
})
export class TerzoComponent {

  date = new Date();
  today: string = this.date.toDateString().split('T')[0]

  @Output()
  sendDate = new EventEmitter();


  @Input()
  prendiNumeroBase!: number;
  @Output()
  sendnumeroMoltiplicato = new EventEmitter()

  moltiplica(numeroDaMoltiplicare: number) {
    return numeroDaMoltiplicare * 10
  }

  selectLido!: any;
  selectExtra!: any;

  listaLidi = [
    { nome: 'lido arturo', costo: 100 },
    { nome: 'la lampara', costo: 220 },
    { nome: 'bagno serena', costo: 110 },
    { nome: 'lido a crepapelle', costo: 20 }
  ]

  listaExtra = [
    { extra: 'lettino', costo: 20 },
    { extra: 'ombrellone', costo: 20 },
    { extra: 'sdraio', costo: 20 },

  ]

  numeroExtra!: number;

  @Output()
  emettiPreventivo = new EventEmitter();

  calcoloPreventivo() {
    let costoTotale = this.numeroExtra*parseInt(this.selectExtra.costo)+parseInt(this.selectLido.costo)
    this.emettiPreventivo.emit(costoTotale);
    console.log('costo totale',typeof costoTotale)
  }


  ngOnInit() {
    this.sendDate.emit(this.today);
    this.sendnumeroMoltiplicato.emit(this.moltiplica(this.prendiNumeroBase))
  }
}
