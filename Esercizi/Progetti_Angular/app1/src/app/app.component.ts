import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  /*
  esercizio Padre Figlio
  nome: string = '';
  inviaNome() {
    this.nome = 'Gaetano';
  }
  }*/

  // esercizio array colori
 
  colori: string[] = ['rosso', 'giallo', 'verde', 'viola'];
  mostraColore(e: any){
    alert(e);
 
  }

}
