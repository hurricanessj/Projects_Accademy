import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private coloreSubject = new BehaviorSubject<string>('#ffffff');
  coloreCorrente$ = this.coloreSubject.asObservable();

  constructor() {
    const coloreSalvato = localStorage.getItem('colore');
    if (coloreSalvato) {
      this.coloreSubject.next(coloreSalvato);
    }
  }

  setColore(colore: string) {
    localStorage.setItem('colore', colore);
    this.coloreSubject.next(colore);
  }

  getColore(): string {
    return this.coloreSubject.value;
  }
}
