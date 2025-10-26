import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Opera } from '../models/Opera';

@Component({
  selector: 'app-dettagli-opera',
  templateUrl: './dettagli-opera.component.html',
  styleUrls: ['./dettagli-opera.component.css']
})
export class DettagliOperaComponent {
  @Input() opera!: Opera;
  @Output() chiudiDettagli = new EventEmitter<void>();

  onChiudi() {
    this.chiudiDettagli.emit();
  }
}
