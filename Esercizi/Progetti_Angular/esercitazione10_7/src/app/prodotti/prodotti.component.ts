import { Component } from '@angular/core';
import { Prodotti } from '../models/Prodotti';
import { ListaService } from '../service/lista.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent {
  listaProdotti: Prodotti[]=[]

  constructor(private listaService: ListaService){
    this.listaService.getProdotti().subscribe(prod=>
      this.listaProdotti = prod
    )
  }

  addProdotto(){
    this.listaService.addProdotto({nome:'telefono'}).subscribe()
  }

}
