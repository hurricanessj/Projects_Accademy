import { Component } from '@angular/core';

@Component({
  selector: 'app-dettagli-nuovouser',
  standalone: false,
  templateUrl: './dettagli-nuovouser.component.html',
  styleUrl: './dettagli-nuovouser.component.css'
})
export class DettagliNuovouserComponent {
  datiUtente: any;

  mostraDettagliFinali(){
    const datiString = sessionStorage.getItem('datiUtente');
        if (datiString) {
      this.datiUtente = JSON.parse(datiString);
      console.log("dati passati finali",this.datiUtente)
    } else {
      this.datiUtente = null;
    }
  }

}
