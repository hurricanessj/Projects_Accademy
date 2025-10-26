import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utente } from '../models/Utente';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  private apiUrl = 'http://localhost:3000/utenti'
  constructor(private http: HttpClient) { }

  getUsers(): Observable<Utente[]> {
    return this.http.get<Utente[]>(this.apiUrl)
  }

  addUser(u: Utente): Observable<Utente> {
    console.log(u)
    return this.http.post<Utente>(this.apiUrl, u)
  }

  updateUser(utente: Utente): Observable<Utente> {
    return this.http.put<Utente>(`${this.apiUrl}/${utente.id}`, utente)
  }
  
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

}
