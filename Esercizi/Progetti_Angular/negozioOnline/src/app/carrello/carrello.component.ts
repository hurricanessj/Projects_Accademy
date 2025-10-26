import { Component, ViewChild } from '@angular/core';
import { NegozioComponent } from '../negozio/negozio.component';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent {

  listaCarrello: any[]=[];
}
