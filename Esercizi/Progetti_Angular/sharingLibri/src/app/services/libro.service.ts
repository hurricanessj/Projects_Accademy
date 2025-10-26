import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Libri } from 'src/Libri';


@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private apiUrl = 'http://localhost:3000/libro'
  private libroSubject = new BehaviorSubject<Libri[]>([])
  public products$ = this.libroSubject.asObservable();
  constructor(private http: HttpClient) { }

  loadProduct() {
    this.http.get<Libri[]>(this.apiUrl).subscribe(libro => {
      this.libroSubject.next(libro);
    })
  }

  getProducts(): Observable<Libri[]> {
    return this.http.get<Libri[]>(this.apiUrl);
  }

}
