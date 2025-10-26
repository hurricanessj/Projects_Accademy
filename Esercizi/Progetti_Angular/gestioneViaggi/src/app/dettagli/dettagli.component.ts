import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dettagli',
  standalone: false,
  templateUrl: './dettagli.component.html',
  styleUrl: './dettagli.component.css'
})
export class DettagliComponent {
  @Input() prenotazione!: {
    firstName: string;
    email: string;
    meta: { id: number; nome: string; costoBase: number };
    numeroPersone: number;
    costoTotale: number;
  };
}
