import { Component } from '@angular/core';
import { Prodotto } from '../model/Prodotti';
import { Fattoria } from '../model/Fattoria';
import { Sede } from '../model/Sede';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent {
  ListaProdotti: Prodotto[] = [
    { id: 1, nome: "Mozzarella", ingrediente: "latte" },
    { id: 2, nome: "Formaggio", ingrediente: "latte" },
    { id: 3, nome: "Marmellata", ingrediente: "fragola" },
    { id: 4, nome: "Salame", ingrediente: "carne" },
    { id: 5, nome: "Pane", ingrediente: "farina" },
    { id: 6, nome: "Burro", ingrediente: "latte" }
  ]


  ListaFattorie: Fattoria[] = [
    { id: 1, prodotti: [1, 2], filiali: [1, 2], nome: 'Fattoria Venezia' },
    { id: 2, prodotti: [3, 4], filiali: [3, 4], nome: 'Fattoria di Angis & Co' },
    { id: 3, prodotti: [5, 6], filiali: [5, 6], nome: 'Fattoria degli Acri Anarchici' }
  ]


  ListaSedi: Sede[] = [
    { id: 1, citta: 'Napoli', fatturato: 1200000 },
    { id: 2, citta: 'Genova', fatturato: 300000 },
    { id: 3, citta: 'Livorno', fatturato: 450000 },
    { id: 4, citta: 'Roma', fatturato: 500000 },
    { id: 5, citta: 'Latina', fatturato: 300000 },
    { id: 6, citta: 'Battipaglia', fatturato: 300000 }
  ]


//select fattoria prodotto e sede
  prodottoSelezionato!: number;
  fattoriaSelezionata!: number;
  sedeSelezionata!: number;

  fattoriaFiltrata: any[] = []

/*
per popolare la select fattoria ci dichiariamo una variabile dove andra il risultato del foreach sulla lista
facciamo la variabile fattoria dove andremo a filtrare la lista oer prodotti e cerchiamo l'elemento confrontandolo con quello selezionato
in results alla fine viene fatto il push del filter creato
*/
  popolaFattoria() {
    this.fattoriaFiltrata = []
    this.ListaFattorie.forEach(fattoria => {

      let farm = fattoria.prodotti.filter(elemento => elemento == this.prodottoSelezionato)
      if (farm.length > 0) {

        this.fattoriaFiltrata.push(fattoria)

      }

    })
  };

  sedeFiltrata!: Sede[];
  
  popolaSediSelect() {
    this.sedeFiltrata = [];
    this.ListaFattorie.forEach(sedeListaFattoria => {
      if (sedeListaFattoria.id == this.fattoriaSelezionata) {

        this.ListaSedi.forEach(filialeListaSedi => {

          sedeListaFattoria.filiali.forEach(sedeListaContollata => {
            if (sedeListaContollata == filialeListaSedi.id) {
              this.sedeFiltrata.push(filialeListaSedi);
            }
          })

        })

      }
    })
  }


  sedeVisualizza!: Sede | undefined;
  visualizzaDettagli() {

    this.sedeVisualizza = this.ListaSedi.find(sede => sede.id == this.sedeSelezionata)

  }

}
