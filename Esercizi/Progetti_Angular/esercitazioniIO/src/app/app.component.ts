import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'esercitazioniIO';

  stringaPadre = 'ciao sono la stringa del padre prima esrcitazione';

  riceviSaluto(messaggioP: string){
    console.log('il padre dice messaggio ricevuto:', messaggioP)
  }

  contatore = 0;
  gestisciClick(){
    this.contatore++;
    console.log("il padre dice: \n click ricevuto. \nclick totali:", this.contatore)
  }

  stringaDaPassare = "questa è la stringa che il padre ha passato";

  gestisciLaStringa(str: string){
    console.log("stringa ricevuta dal figlio:\n",str)
  }
}
