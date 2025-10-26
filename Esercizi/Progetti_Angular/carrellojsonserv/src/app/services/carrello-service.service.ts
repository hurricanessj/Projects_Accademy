import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from 'src/models/Products';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {
  private carSubject = new BehaviorSubject<Products[]>([]);
  public cart$ = this.carSubject.asObservable();
  constructor() { }

  addToCart(product: Products): void{
    const current= this.carSubject.value;//valore attuaLE DEL carrello

    this.carSubject.next([...current, product])//aggiungere un elemento alla lista gia esistente
  }

  clearCart(){
    this.carSubject.next([])//svuotiamo il carrello
  }
}
