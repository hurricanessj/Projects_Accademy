import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.css']
})
export class SecondoComponent {

  @Input()
  nomeCognome!: {
    nome: string,
    cognome: string
  }

  @Output()
  nomeCompleto = new EventEmitter()

  fullName(){
    this.nomeCompleto.emit(`${this.nomeCognome.nome}- ${this.nomeCognome.cognome}`)

  }

}
