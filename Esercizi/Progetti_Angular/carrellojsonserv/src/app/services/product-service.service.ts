import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Products } from 'src/models/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products'
  private productSubject = new BehaviorSubject<Products[]>([])
  public products$ = this.productSubject.asObservable();
  constructor(private http: HttpClient) { }

  loadProduct() {
    this.http.get<Products[]>(this.apiUrl).subscribe(products => {
      this.productSubject.next(products);
    })
  }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.apiUrl);
  }

  addProduct(product: Products) {
    this.http.post<Products>(this.apiUrl, product).subscribe(prod => {
      const current = this.productSubject.value;
      this.productSubject.next([...current, prod]);
    })
  }
}
