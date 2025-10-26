import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Delivery } from '../Models/Delivery';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private deliveriesSubject = new BehaviorSubject<Delivery[]>([]);
  deliveries$ = this.deliveriesSubject.asObservable();
  private apiUrl = 'https://deliflower.onrender.com';

  constructor(private http: HttpClient) {
    this.load();
  }

  load(): void {
    this.http.get<Delivery[]>(this.apiUrl).subscribe(data => {
      const sorted = data.sort(
        (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()
      );
      this.deliveriesSubject.next(sorted);
    });
  }

  add(delivery: Omit<Delivery, 'id'>): Observable<Delivery> {
    return this.http.post<Delivery>(this.apiUrl, delivery).pipe(tap(() => this.load()));
  }

  update(id: number, delivery: Partial<Delivery>): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, delivery).pipe(tap(() => this.load()));
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(tap(() => this.load()));
  }

  getById(id: number): Observable<Delivery | undefined> {
    return this.deliveries$.pipe(map(ds => ds.find(d => d.id == id)));
  }
}
