import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Videogiochi } from '../model/Videogiochi';
@Injectable({
  providedIn: 'root'
})
export class VideogiocoService {
  private apiUrl = 'http://localhost:3000/videogiochi'

  constructor(private http: HttpClient) { }

  getVideogiochi():Observable<Videogiochi[]> {
    return this.http.get<Videogiochi[]>(this.apiUrl)
  }

  addVideogioco(gioco: Omit<Videogiochi, 'id'>): Observable<Videogiochi> {
    return this.http.post<Videogiochi>(this.apiUrl, gioco)
  }

  updateVideogioco(gioco: Videogiochi): Observable<Videogiochi> {
    return this.http.put<Videogiochi>(`${this.apiUrl}/${gioco.id}`, gioco)
  }
  
  deleteVideogioco(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

}
