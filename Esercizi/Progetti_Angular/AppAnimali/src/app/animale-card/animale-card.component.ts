import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animale } from '../models/animale.model';
@Component({
  selector: 'app-animale-card',
  standalone: false,
  templateUrl: './animale-card.component.html',
  styleUrl: './animale-card.component.css'
})
export class AnimaleCardComponent {
    @Input() animale!: Animale;
  @Output() versoEmesso = new EventEmitter<string>();

  emettiVerso() {
    this.versoEmesso.emit(`${this.animale.nome} fa ${this.animale.verso}`);
  }

}
