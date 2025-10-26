import { Component, ViewChild } from '@angular/core';
import { FiglioComponent } from './figlio/figlio.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'listaLibri';
  nomeUtente = 'Gaetano';

  nomiPadre: { nome: string }[] = [
    { nome: 'gaetano' },
    { nome: 'ciro' },
    { nome: 'salvatore' }
  ];

  @ViewChild(FiglioComponent)
  figlioComponent !: FiglioComponent

  ngAfterViewInit() {
    this.figlioComponent.sayHello('gaetano', 'esposito');
  }
}
