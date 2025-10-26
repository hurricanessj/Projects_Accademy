import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Products } from 'src/models/Products';
import { ProductService } from '../services/product-service.service';
 
@Component({
  selector: 'app-form-prodotti',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormProdottiComponent {
 
  productForm = this.formBuilder.group({
    name: ['', Validators.required],
    price: [0,[ Validators.required, Validators.min(0.01)]]
  });
 
  constructor(private formBuilder: FormBuilder, private productService: ProductService){}
 
 
 
  submit(){
    console.log(this.productForm.value)
    if(this.productForm.valid){
      const product = this.productForm.value as Omit<Products, 'id'>;
      console.log("prodoot", product);
      this.productService.addProduct(product);
      this.productForm.reset({name: '', price: 0});
    }
   
  }
}
 
 