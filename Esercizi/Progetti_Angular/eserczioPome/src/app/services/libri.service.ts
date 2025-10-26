import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../Model/libro';

@Injectable({
  providedIn: 'root'
})
export class LibriService {


  private apiUrl= "http://localhost:3000/libri"

  constructor(private http: HttpClient) { }

getLibri(): Observable<Libro[]>{
  return this.http.get<Libro[]>(this.apiUrl);
}

addLibro(libro: Omit<Libro, 'id'>): Observable<Libro>{
  return this.http.post<Libro>(this.apiUrl, libro);
}

modificaLibro(libro:Omit<Libro, 'id'>, id: number): Observable<Libro>{
  return this.http.put<Libro>(`${this.apiUrl} /${id}`, libro);
  
}

eliminaLibro(id: number){
  this.http.delete<Libro>(`${this.apiUrl}/${id}`);
}

}
