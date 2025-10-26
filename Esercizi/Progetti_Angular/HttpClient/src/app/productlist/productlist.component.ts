import { Component } from '@angular/core';
import { Product } from '../Product';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  products!: Product[];

  constructor(private store: StoreService) {
  }
  /*
  ngOnInit(){
    this.store.getAllProducts().subscribe(data =>{
      this.products = data;
    })
  }*/

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
