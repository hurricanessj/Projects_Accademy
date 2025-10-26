import { Component, Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-rubrica',
  standalone: false,
  templateUrl: './rubrica.component.html',
  styleUrl: './rubrica.component.css'
})
export class RubricaComponent {

  @Output()
  visualizzaRubrica = new EventEmitter<string[]>();
  contatti = ['1111111111', '2222222222', '3333333333'];


  ngOnInit(){
    this.visualizzaRubrica.emit(this.contatti);
  }
}
