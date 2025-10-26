import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-figlio',
  standalone: false,
  templateUrl: './figlio.component.html',
  styleUrl: './figlio.component.css'
})
export class FiglioComponent{
  @Input() nome: string = '';
}
