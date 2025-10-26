import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidatura } from '../model/Candidatura';

@Injectable({
  providedIn: 'root'
})
export class CandidaturaService {
  private api = "http://localhost:8080/candidatura";
 
    constructor(private http: HttpClient) { }
 
    getAllCandidature():Observable<Candidatura[]>{
      return this.http.get<Candidatura[]>(`${this.api}/all/lavoro`);
    }
    
    addCandidatura(offerte:Omit<Candidatura,'id'>){
      return this.http.post(`${this.api}/add/offerta`,offerte)
    }

    updateCandidatura(candidatura: Candidatura){
      return this.http.put(`${this.api}/update/offerta${candidatura.id}`,candidatura)
    }

    deleteCandidatura(id:any){
      return this.http.delete(`${this.api}/delete/offerta/${id}`)
    }
}
