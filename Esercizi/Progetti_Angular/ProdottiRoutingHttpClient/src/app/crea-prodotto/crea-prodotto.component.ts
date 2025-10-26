import { Component } from '@angular/core';
import { Product } from '../Product';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-crea-prodotto',
  templateUrl: './crea-prodotto.component.html',
  styleUrls: ['./crea-prodotto.component.css']
})
export class CreaProdottoComponent {
 constructor(private productService: StoreService){
  }
 
  prodotto!:Product;
 
  onCreate(){
    this.productService.createProduct(this.prodotto).subscribe({
      next: (data)=>{
        console.log('creato', this.prodotto);
      },
      error: (err)=>{
        console.error(err);
      }
    })
  }
}
