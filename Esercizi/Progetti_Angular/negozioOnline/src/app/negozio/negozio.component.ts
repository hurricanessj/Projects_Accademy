import { Component, ViewChild } from '@angular/core';
import { CarrelloComponent } from '../carrello/carrello.component';

@Component({
  selector: 'app-negozio',
  templateUrl: './negozio.component.html',
  styleUrls: ['./negozio.component.css']
})
export class NegozioComponent {

  listaProdotti: any[] = [
    {
      id: 1,
      nome: "Mouse Wireless",
      descrizione: "Mouse ottico wireless con 3 tasti e ricevitore USB.",
      prezzo: 19.99,
      quantità: 50,
      categoria: "Informatica"
    },
    {
      id: 2,
      nome: "Tastiera Meccanica",
      descrizione: "Tastiera con switch blu e retroilluminazione RGB.",
      prezzo: 59.99,
      quantità: 30,
      categoria: "Informatica"
    },
    {
      id: 3,
      nome: "Zaino Impermeabile",
      descrizione: "Zaino da 25L con porta USB integrata.",
      prezzo: 34.90,
      quantità: 100,
      categoria: "Accessori"
    },
    {
      id: 4,
      nome: "Smartphone X10",
      descrizione: "Display AMOLED, 128GB di memoria, dual SIM.",
      prezzo: 299.00,
      quantità: 20,
      categoria: "Elettronica"
    },
    {
      id: 5,
      nome: "Cuffie Bluetooth",
      descrizione: "Cuffie wireless con cancellazione attiva del rumore.",
      prezzo: 79.90,
      quantità: 40,
      categoria: "Audio"
    }
  ]
  @ViewChild(CarrelloComponent) carrello!: CarrelloComponent;

  aggiungiAlCarrello(prodotto: any) {
    this.carrello.listaCarrello.push(prodotto)
  }




}
