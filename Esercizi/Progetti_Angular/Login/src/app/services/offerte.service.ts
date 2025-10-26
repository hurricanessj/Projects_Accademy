import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offerta } from '../models/Offerta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferteService {

  private url = "http://localhost:3000/jobs"

  constructor(private http: HttpClient) { }

  getOfferte(): Observable<Offerta[]>{
    return this.http.get<Offerta[]>(this.url)
  }

  addOfferta(o: Offerta): Observable<Offerta>{
    return this.http.post<Offerta>(this.url,o)
  }
}
