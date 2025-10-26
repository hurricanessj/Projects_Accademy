import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-con-input',
  standalone: false,
  templateUrl: './componente-con-input.component.html',
  styleUrl: './componente-con-input.component.css'
})
export class ComponenteConInputComponent {
  @Input()
  dato!: string;

  constructor(){

  }


}
