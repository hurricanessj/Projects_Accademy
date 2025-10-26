import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-figlio',
  standalone: false,
  templateUrl: './figlio.component.html',
  styleUrl: './figlio.component.css'
})
export class FiglioComponent {
  title: string = 'titolo del figlio';
  @Input() nomi: { nome: string }[] = [];
  
  sayHello(nome: string = '', cognome: string = '') {

    console.log(`hello! ${nome} ${cognome}`)
  }
}
