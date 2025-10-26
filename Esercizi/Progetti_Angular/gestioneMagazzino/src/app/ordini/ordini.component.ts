import { Component, OnInit } from '@angular/core';
import { Ordine } from '../models/Ordine';
import { OrdineService } from '../services/ordine.service';

@Component({
  selector: 'app-ordini',
  templateUrl: './ordini.component.html',
  styleUrls: ['./ordini.component.css']
})
export class OrdiniComponent implements OnInit {
  ordini: Ordine[] = [];

  constructor(private ordineService: OrdineService) {}

  ngOnInit(): void {
    this.ordineService.loadOrdini();
    this.ordineService.ordini$.subscribe(ordini => {
      this.ordini = ordini;
    });
  }
}
