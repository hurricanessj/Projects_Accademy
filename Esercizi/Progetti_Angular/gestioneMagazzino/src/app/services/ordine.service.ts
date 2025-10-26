import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ordine } from '../models/Ordine';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdineService {
  private apiUrl = 'http://localhost:3000/Ordine';
  private ordineSubject = new BehaviorSubject<Ordine[]>([]);
  public ordini$ = this.ordineSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadOrdini(): void {
    this.http.get<Ordine[]>(this.apiUrl).subscribe(ordini => {
      this.ordineSubject.next(ordini);
    });
  }

  getOrdini(): Observable<Ordine[]> {
    return this.http.get<Ordine[]>(this.apiUrl);
  }


  addOrdine(nuovoOrdine: Ordine): Observable<Ordine> {
    return this.http.post<Ordine>(this.apiUrl, nuovoOrdine);
  }


  updateOrdine(id: number, dati: Partial<Ordine>): Observable<Ordine> {
    return this.http.put<Ordine>(`${this.apiUrl}/${id}`, dati);
  }


  deleteOrdine(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
