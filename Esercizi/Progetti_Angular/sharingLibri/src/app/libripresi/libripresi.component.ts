import { Component } from '@angular/core';
import { Libri } from 'src/Libri';
import { Libropreso } from '../services/libropreso.service';

@Component({
  selector: 'app-libripresi',
  templateUrl: './libripresi.component.html',
  styleUrls: ['./libripresi.component.css']
})
export class LibripresiComponent {
  libro: Libri[] = [];
  constructor(private libroresoService: Libropreso){}
 
  ngOnInit(){
    this.libroresoService.cart$.subscribe(cart=>{
      this.libro = cart;
    })
  }
 
  pulisci(){
    this.libroresoService.clearCart();
  }
 
 
}
