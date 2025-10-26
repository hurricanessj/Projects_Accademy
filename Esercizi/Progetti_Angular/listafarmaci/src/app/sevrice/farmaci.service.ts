import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Farmaco } from '../models/Farmaco';

@Injectable({
  providedIn: 'root'
})
export class FarmaciService {
  private apiUrl = 'http://localhost:3000/farmaci';

  constructor(private http: HttpClient) {}

  getFarmaci(): Observable<Farmaco[]> {
    return this.http.get<Farmaco[]>(this.apiUrl);
  }

  addFarmaco(farmaco: Farmaco): Observable<Farmaco> {
    return this.http.post<Farmaco>(this.apiUrl, farmaco);
  }

  deleteFarmaco(id: number){
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  editFarmaco(farmaco: Farmaco){
    return this.http.put<Farmaco>(`${this.apiUrl}/${farmaco.id}`, farmaco);
  }
}
