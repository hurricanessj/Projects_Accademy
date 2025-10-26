import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Opera } from '../models/Opera';

@Injectable({
  providedIn: 'root'
})
export class OpereService {

  private url = 'http://localhost:3000/opere';
  constructor(private http: HttpClient) { }

  getOpere(): Observable<Opera[]> {
    return this.http.get<Opera[]>(this.url);
  }


  addOpera(opera: Omit<Opera, 'id'>): Observable<Opera> {
  return this.http.post<Opera>(this.url, opera);
}

  updateOpera(opera: Opera): Observable<Opera> {
    return this.http.put<Opera>(`${this.url}/${opera.id}`, opera)
  }

  deleteOpera(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`)
  }
}
