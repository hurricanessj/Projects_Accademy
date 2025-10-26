import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-figlio-saluta',
  standalone: false,
  templateUrl: './componente-figlio-saluta.component.html',
  styleUrl: './componente-figlio-saluta.component.css'
})
export class ComponenteFiglioSalutaComponent {
  @Input()
  salutoFiglio !: string;

  constructor(){}

}
