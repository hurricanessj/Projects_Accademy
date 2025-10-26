import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-figlio',
  standalone: false,
  templateUrl: './figlio.component.html',
  styleUrl: './figlio.component.css'
})
export class FiglioComponent {
  @Input()
  stringaFiglio!: string;

  @Output()
  messaggioFiglio = new EventEmitter<string>()

  @Output()
  cliccato= new EventEmitter<string>()

  inviaSaluto(){
    this.messaggioFiglio.emit('saluto inviato dal figlio')
  }

  notificaPadre(){
    this.cliccato.emit()
  }


  @Input()
  stringaDaRicevere !: string;

  @Output()
  confermaStringa = new EventEmitter<string>()

  mostraStringaAccettata(){
    this.confermaStringa.emit(this.stringaDaRicevere)
  }


}
