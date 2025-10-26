import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prodottifiniti',
  templateUrl: './prodottifiniti.component.html',
  styleUrls: ['./prodottifiniti.component.css']
})
export class ProdottifinitiComponent {
@Input()
prodFiniti!: any[]


}
