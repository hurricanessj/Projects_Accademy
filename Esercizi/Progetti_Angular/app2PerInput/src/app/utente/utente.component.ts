import { Component, Input } from '@angular/core';
import { Iutente } from '../Model/Iutente';

@Component({
  selector: 'app-utente',
  standalone: false,
  templateUrl: './utente.component.html',
  styleUrl: './utente.component.css'
})
export class UtenteComponent {
  @Input()
  user!: Iutente;

  @Input()
  mostraCognome!: boolean

  constructor(){}

  ngOnInit(){}
}
