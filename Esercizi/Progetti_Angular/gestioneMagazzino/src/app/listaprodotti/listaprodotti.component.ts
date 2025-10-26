import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Prodotto } from '../models/Prodotto';
import { ProdottoService } from '../services/prodotto.service';

@Component({
  selector: 'app-listaprodotti',
  templateUrl: './listaprodotti.component.html',
  styleUrls: ['./listaprodotti.component.css']
})
export class ListaprodottiComponent implements OnInit {
  prodotti: Prodotto[] = [];
  selectedProdotto: Prodotto | null = null;

  prodottoForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    descrizione: new FormControl('', [Validators.required]),
    giacenza: new FormControl(0, [Validators.required, Validators.min(0)])
  });

  constructor(private prodottoService: ProdottoService) {}

ngOnInit(): void {
  this.prodottoService.loadProduct();

  this.prodottoService.products$.subscribe(data => {
    this.prodotti = data;
  });
}


  getProdotti() {
    this.prodottoService.loadProduct();
    this.prodottoService.products$.subscribe(data => {
      this.prodotti = data;
    });
  }

  addProdotto(newProdotto: any) {
    this.prodottoService.addProdotto(newProdotto).subscribe({
      next: () => this.getProdotti(),
      error: err => console.log('Errore aggiunta:', err)
    });
  }

  openEditModal(prodotto: Prodotto) {
    this.selectedProdotto = prodotto;
    this.prodottoForm.patchValue({
      nome: prodotto.nome,
      descrizione: prodotto.descrizione,
      giacenza: prodotto.giacenza
    });
  }



  deleteProdotto(id: number) {
    this.prodottoService.deleteProdotto(id).subscribe({
      next: () => this.getProdotti(),
      error: err => console.error('Errore cancellazione:', err)
    });
  }
}
