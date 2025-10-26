import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
 progetti = [
    { nome: 'Progetto 1', membri: ['Gaetano', 'Davide', 'Simone'] },
    { nome: 'Progetto 2', membri: ['Francesco', 'Gennaro'] },
    { nome: 'Progetto 3',membri: ['Vincenzo', 'Miriana', 'Davide'] }
  ];

  progettoSelezionato: any = null;

  selezionaProgetto(progetto: any) {
    this.progettoSelezionato = progetto;
  }
}
