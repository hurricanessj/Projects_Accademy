import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Utente } from 'src/models/Utente';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtentiService {
  private apiUrl = 'http://localhost:3000/utenti'

  constructor(private http: HttpClient) { }

  getUtenti(): Observable<Utente[]> {
    return this.http.get<Utente[]>(this.apiUrl)
  }

  addUtenti(utente: Omit<Utente, 'id'>): Observable<Utente> {
    return this.http.post<Utente>(this.apiUrl, utente)
  }

  updateUtenti(utente: Utente): Observable<Utente> {
    return this.http.put<Utente>(`${this.apiUrl}/${utente.id}`, utente)

  }
  deleteUtente(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

}
