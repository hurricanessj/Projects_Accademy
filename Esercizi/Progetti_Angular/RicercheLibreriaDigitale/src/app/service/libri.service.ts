import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libri } from '../Libri';

@Injectable({
  providedIn: 'root'
})
export class LibriService {
  private apiUrl = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { }

  getLibri(): Observable<Libri[]>{
    return this.http.get<Libri[]>(this.apiUrl);
  }
  
  addLibro(libro: Omit<Libri, 'id'>): Observable<Libri>{
    return this.http.post<Libri>(this.apiUrl, libro);
  }

  updateLibro(libro: Libri): Observable<Libri>{
    return this.http.put<Libri>(`${this.apiUrl}/${libro.id}`, libro);
  }

  deleteLibro(id: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
