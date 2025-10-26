import { Component, Input, ViewChild } from '@angular/core';
import { Auto } from '../model/Auto';
import { VisualizzaImgComponent } from '../visualizza-img/visualizza-img.component';

@Component({
  selector: 'app-nomeazienda',
  standalone: false,
  templateUrl: './nomeazienda.component.html',
  styleUrl: './nomeazienda.component.css'
})
export class NomeaziendaComponent {

  @ViewChild(VisualizzaImgComponent) img!: VisualizzaImgComponent;

  @Input()
  nomepassato = '';
  autoList: Auto[] = [
    { modello: "Punto", anno: 2000, matricola: "QWERTY", prezzo: 30000 },
    { modello: "500", anno: 2016, matricola: "AZERTY", prezzo: 120000 },
    { modello: "Panda", anno: 2020, matricola: "QWERTYIOP", prezzo: 40000 }
  ]

  valoreSelezionato: string = '';


}
