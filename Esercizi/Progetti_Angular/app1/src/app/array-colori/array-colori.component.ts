import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'app-array-colori',
  standalone: false,
  templateUrl: './array-colori.component.html',
  styleUrl: './array-colori.component.css'
})
export class ArrayColoriComponent {
  @Input()
  colori: string[] = [];
  coloreSelezionato = '';
  @Output()
  evento = new EventEmitter();


  cambiaColore() {
    this.evento.emit(this.coloreSelezionato);
  }
  
}
