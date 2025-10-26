import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-figlio',
  standalone: false,
  templateUrl: './figlio.component.html',
  styleUrl: './figlio.component.css'
})
export class FiglioComponent {
    @Input()
    nome!: string;//il nome lo prendiamo dal padre ovvero app.component.ts
    
    //@Output [FIGLIO] ---> (evento/dati) ---> [PADRE]
     @Output() 
     saluto = new EventEmitter<string>();

  inviaSaluto() {
    this.saluto.emit('Ciao dal figlio!');
  }

}
