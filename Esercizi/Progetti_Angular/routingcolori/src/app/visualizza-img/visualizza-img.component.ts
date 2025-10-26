import { Component} from '@angular/core';
import { ViewChild } from '@angular/core';
import { NomeaziendaComponent } from '../nomeazienda/nomeazienda.component';
import { Auto } from '../model/Auto';
@Component({
  selector: 'app-visualizza-img',
  standalone: false,
  templateUrl: './visualizza-img.component.html',
  styleUrl: './visualizza-img.component.css'
})
export class VisualizzaImgComponent {
modelloAuto!: Auto;

}
