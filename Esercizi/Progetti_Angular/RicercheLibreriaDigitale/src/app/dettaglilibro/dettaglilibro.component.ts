import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Libri } from '../Libri';

@Component({
  selector: 'app-dettaglilibro',
  templateUrl: './dettaglilibro.component.html',
  styleUrls: ['./dettaglilibro.component.css']
})
export class DettaglilibroComponent {
  @Input() libro!: Libri;
  @Output() chiudiDettagli = new EventEmitter<void>();

  onChiudi() {
    this.chiudiDettagli.emit();
  }
}
