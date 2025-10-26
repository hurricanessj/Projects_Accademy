import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Prodotto } from '../models/Prodotto';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {
  private apiUrl = 'http://localhost:3000/Prodotto'
  private libroSubject = new BehaviorSubject<Prodotto[]>([])
  public products$ = this.libroSubject.asObservable();

  constructor(private http: HttpClient) { }

  loadProduct() {
    this.http.get<Prodotto[]>(this.apiUrl).subscribe(prodotto => {
      this.libroSubject.next(prodotto);
    })
  }

addProdotto(prodotto: Prodotto): Observable<Prodotto> {
  return this.http.post<Prodotto>(this.apiUrl, prodotto).pipe(
    tap(() => this.loadProduct()) 
  );
}

updateProdotto(id: number, dati: Partial<Prodotto>): Observable<Prodotto> {
  return this.http.put<Prodotto>(`${this.apiUrl}/${id}`, dati).pipe(
    tap(() => this.loadProduct())
  );
}

deleteProdotto(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
    tap(() => this.loadProduct())
  );
}


  getProducts(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(this.apiUrl);
  }



}
