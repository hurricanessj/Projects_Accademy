import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Prodotti } from '../models/Prodotti';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private apiUrl = 'http://localhost:3000/prodotti';
  private listaSubject = new BehaviorSubject<Prodotti[]>([]);
  lista$ = this.listaSubject.asObservable();


  constructor(private http: HttpClient) { }

  getProdotti(): Observable<Prodotti[]>{
    return this.http.get<Prodotti[]>(this.apiUrl)
  }

  addProdotto(prod: Prodotti): Observable<Prodotti>{
    return this.http.post<Prodotti>(this.apiUrl, prod)
  }



}
