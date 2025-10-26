import { Component } from '@angular/core';
import { Product } from '../Product';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  products!: Product[];

  constructor(private store: StoreService) {
  }

  ngOnInit() {
    this.store.getAllProducts().subscribe({
      next: (data) => {
        this.products = data
      },
      error: (err) => {
        console.error("erore", err);
      }
    })
  }
  
}
