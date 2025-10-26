import { Component } from '@angular/core';

@Component({
  selector: 'app-dettagli',
  standalone: false,
  templateUrl: './dettagli.component.html',
  styleUrl: './dettagli.component.css'
})
export class DettagliComponent {
  leggiDettagli(nome: string, cognome: string) {
    console.log(nome);
    console.log(cognome);
  }
}
/*un app che consente all'utente di fare un viaggio compilare i dati e una meta ogni viaggio
un pacchetto viaggio il costo del viaggio va moltiplicato per ogni persona nel viaggio*/