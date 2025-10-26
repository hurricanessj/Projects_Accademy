import { Component } from '@angular/core';
import { Products } from 'src/models/Products';
import { CarrelloService } from '../services/carrello-service.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent {
  carello: Products[] = [];
  constructor(private carelloService: CarrelloService){}
 
  ngOnInit(){
    this.carelloService.cart$.subscribe(cart=>{
      this.carello = cart; //assegniamo il carrrrello  recuperato
    })
  }
 
  pulisci(){
    this.carelloService.clearCart();
  }
 
 
 
}
