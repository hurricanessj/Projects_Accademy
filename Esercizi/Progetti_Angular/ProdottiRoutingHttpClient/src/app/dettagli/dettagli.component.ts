import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.css']
})
export class DettagliComponent implements OnInit {
  product!: Product;

  constructor(private route: ActivatedRoute,private storeService: StoreService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.storeService.getProductById(id).subscribe({
        next: (data) => this.product = data,
        error: (err) => console.error('Errore durante il caricamento del prodotto:', err)
      });
    }
  }
}
