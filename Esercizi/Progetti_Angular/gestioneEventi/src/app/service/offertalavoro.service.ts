import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OffertaLavoro } from '../model/OffertaLavoro';

@Injectable({
  providedIn: 'root'
})
export class OffertalavoroService {
  private api = "http://localhost:8080/offerta";

  constructor(private http: HttpClient) {}
  

  getAllOfferta(): Observable<OffertaLavoro[]> {
    return this.http.get<OffertaLavoro[]>(this.api);
  }

  getOffertaById(id: number): Observable<OffertaLavoro> {
    return this.http.get<OffertaLavoro>(`${this.api}/${id}`);
  }

  addOfferta(lavoro: Omit<OffertaLavoro,'id'>) {
    return this.http.post<OffertaLavoro>(this.api, lavoro);
  }

  updateOfferta(offerta: OffertaLavoro) {
    return this.http.put<OffertaLavoro>(`${this.api}/${offerta.id}`, offerta);
  }

  deleteOfferta(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }

}
