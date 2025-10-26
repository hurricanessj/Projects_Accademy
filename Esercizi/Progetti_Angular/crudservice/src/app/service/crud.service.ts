import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poi } from '../models/Poi';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiUrl= 'http://localhost:3000/pois'
  constructor(private http: HttpClient) { }

  getPoi():Observable <Poi[]>{
    return this.http.get<Poi[]>(this.apiUrl)
  }

  addPoi(poi: Omit<Poi, 'id'>):Observable<Poi>{
    return this.http.post<Poi>(this.apiUrl, poi)
  }

  updatePoi(poi: Poi):Observable<Poi>{
    return this.http.put<Poi>(this.apiUrl, poi)
  }

  deletePoi(id: number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
    
}
