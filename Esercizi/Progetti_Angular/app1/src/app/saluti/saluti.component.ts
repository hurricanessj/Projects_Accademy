import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-saluti',
  standalone: false,
  templateUrl: './saluti.component.html',
  styleUrl: './saluti.component.css'
})
export class SalutiComponent {
  @Input()
  nomeSaluto !: string;

  constructor(){}

}
