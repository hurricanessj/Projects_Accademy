import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Libri } from 'src/Libri';


@Injectable({
  providedIn: 'root'
})
export class Libropreso {
  private libSubject = new BehaviorSubject<Libri[]>([]);
  public cart$ = this.libSubject.asObservable();
  constructor() { }

  addToCart(libro: Libri): void{
    const current= this.libSubject.value;

    this.libSubject.next([...current, libro])
  }

  clearCart(){
    this.libSubject.next([])
  }
}
