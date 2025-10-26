import { Component } from '@angular/core';
import { ColorService } from '../sevice/color.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    coloreSelezionato: string = '#ffffff';

  constructor(private colorService: ColorService) {}

  cambiaColore(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.coloreSelezionato = input.value;
    this.colorService.setColore(this.coloreSelezionato);
  }

}
