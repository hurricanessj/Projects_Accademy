import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progetti',
  standalone: false,
  templateUrl: './progetti.component.html',
  styleUrl: './progetti.component.css'
})
export class ProgettiComponent {
  @Input() 
  progetto: any;
}
