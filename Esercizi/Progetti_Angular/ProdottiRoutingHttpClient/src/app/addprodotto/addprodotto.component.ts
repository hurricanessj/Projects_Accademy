import { Component, Input } from '@angular/core';
import { Product } from '../Product';
import { StoreService } from '../services/store.service';
@Component({
  selector: 'app-addprodotto',
  templateUrl: './addprodotto.component.html',
  styleUrls: ['./addprodotto.component.css']
})
export class AddprodottoComponent {

  @Input()
  id: number = 0;
  @Input()
  prodotto!: Product;
  constructor(private productService: StoreService) { }

  onCreate(prodotto: any) {
    if (this.id > 0) {

      this.productService.updateProduct(this.id, prodotto).subscribe({
        next: (data) => {
          console.log('modificato', data);
        },
        error: (err) => {
          console.error(err);
        }
      })
    } else {
      console.log(prodotto)
      this.productService.createProduct(prodotto).subscribe({
        next: (data) => {
          console.log('creato', data);
        },
        error: (err) => {
          console.error(err);
        }
      })
    }
  }
}
