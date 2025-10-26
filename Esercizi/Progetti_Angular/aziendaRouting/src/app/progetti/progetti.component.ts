import { Component } from '@angular/core';

@Component({
  selector: 'app-progetti',
  templateUrl: './progetti.component.html',
  styleUrls: ['./progetti.component.css']
})
export class ProgettiComponent {
progetti = [
  {
    titolo: 'Sistema di prenotazione',
    descrizione: 'Una piattaforma per gestire prenotazioni in tempo reale.',
    img: 'assets/images/progetto1.jpg'
  },
  {
    titolo: 'App gestione magazzino',
    descrizione: 'Soluzione per tracciare scorte e logistica.',
    img: 'assets/images/progetto2.jpg'
  },
  {
    titolo: 'Dashboard',
    descrizione: 'Visualizzazione interattiva dei dati aziendali.',
    img: 'assets/images/progetto3.jpg'
  }
];
}