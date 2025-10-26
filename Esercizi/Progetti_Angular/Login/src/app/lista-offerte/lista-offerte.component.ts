import { Component } from '@angular/core';
import { Offerta } from '../models/Offerta';
import { OfferteService } from '../services/offerte.service';

@Component({
  selector: 'app-lista-offerte',
  templateUrl: './lista-offerte.component.html',
  styleUrls: ['./lista-offerte.component.css']
})
export class ListaOfferteComponent {
  offerte!: Offerta[]

  constructor(private offertaService: OfferteService){}


  ngOnInit(){
    this.caricaLista()
  }

  caricaLista(){
    this.offertaService.getOfferte().subscribe(lista =>{
      next: this.offerte = lista
    })
  }

}
