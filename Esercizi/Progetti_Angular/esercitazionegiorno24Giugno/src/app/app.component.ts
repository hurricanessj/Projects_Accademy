import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esercitazionegiorno24Giugno';

  datoDaPassare = { nome: 'gaetano' }

  stampaInfo(date: any) {
    console.log(date)
  }

  numerobase: number = 44;

  recuperaNumero(numeroPassato: number){
    console.log(numeroPassato);

  }


}
