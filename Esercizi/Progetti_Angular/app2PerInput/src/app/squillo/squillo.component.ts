import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-squillo',
  standalone: false,
  templateUrl: './squillo.component.html',
  styleUrl: './squillo.component.css'
})
export class SquilloComponent {

  @Input() messaggio!: string;

  @Output() risposta = new EventEmitter<string>();

  inviaRisposta() {
    this.risposta.emit(`Ho ricevuto il messaggio: ${this.messaggio}`);
  }

}
