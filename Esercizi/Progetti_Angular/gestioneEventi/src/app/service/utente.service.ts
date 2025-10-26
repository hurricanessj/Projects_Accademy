import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Utente } from '../model/Utente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {
  private api = "http://localhost:8080/utente";

  constructor(private http: HttpClient) { }

  getAllUtenti(): Observable<Utente[]> {
    return this.http.get<Utente[]>(`${this.api}/getAll`);
  }


  register(utente: Omit<Utente, 'id'>) {
    return this.http.post(`${this.api}/register`, utente)
  }

  addUtente(utente: Omit<Utente, 'id'>) {
    return this.http.post(`${this.api}/add/utente`, utente)
  }

  me(utente: Omit<Utente, 'id'>) {
    return this.http.post(`${this.api}/me`, utente)
  }


}
