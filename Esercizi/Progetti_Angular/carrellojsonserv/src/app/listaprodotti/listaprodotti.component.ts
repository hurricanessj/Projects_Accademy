import { Component } from '@angular/core';
import { ProductService } from '../services/product-service.service';
import { Products } from 'src/models/Products';
import { CarrelloService } from '../services/carrello-service.service';

@Component({
  selector: 'app-listaprodotti',
  templateUrl: './listaprodotti.component.html',
  styleUrls: ['./listaprodotti.component.css']
})
export class ListaprodottiComponent {
  prodotti: Products[] = []
  constructor(private productService: ProductService, private cartService: CarrelloService) { }

  ngOnInit() {
    this.productService.products$.subscribe(prodotti => {
      this.prodotti = prodotti;
    })
  }

  addToChart(p: Products) {
    this.cartService.addToCart(p);
  }
}
