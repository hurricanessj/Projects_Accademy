import { Component } from '@angular/core';
import { Cane, Gatto, Animale } from '../models/animale.model';

@Component({
  selector: 'app-animali',
  standalone: false,
  templateUrl: './animali.component.html',
  styleUrl: './animali.component.css'
})
export class AnimaliComponent {
  listaAnimali: Animale[] = [
    new Cane('Fuffy'),
    new Gatto('snorlax')
  ];

  riceviVerso(msg: string){
    alert(`Ricevuto dal figlio: ${msg}`);
  }
}