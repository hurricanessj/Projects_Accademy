import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  standalone: false,
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  /*@Input [PADRE] ---> (dati) ---> [FIGLIO]
  in app.component.ts 
  nomeUtente = 'Gaetano';

  in app.component.html
  <app-figlio [nome]="nomeUtente"></app-figlio>


  //@Output [FIGLIO] ---> (evento/dati) ---> [PADRE]
  per Output
  app.component.ts

  riceviSaluto(messaggio: string) {
    console.log('Ricevuto:', messaggio);
  }

  app.component.html
 <app-figlio (saluto)="riceviSaluto($event)"></app-figlio>


  */

}
