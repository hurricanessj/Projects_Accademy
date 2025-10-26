import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-componente-con-output',
  standalone: false,
  templateUrl: './componente-con-output.component.html',
  styleUrl: './componente-con-output.component.css'
})
export class ComponenteConOutputComponent {
  @Output()
  evento = new EventEmitter()
  
  constructor() {

   }

   ngOnInit(){
    this.evento.emit('Saluti dal figlio');
   }
}
