import { Component } from '@angular/core';
import { DeliveryService } from '../service/delivery.service';
import { Delivery } from '../Models/Delivery';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent { 
  listaConsegne: Delivery[] = [];
  selectedDelivery: Delivery | null = null;
  dettagliDelivery: Delivery | null = null;

  filtroNome = '';
  filtroStato: 'tutti' | 'si' | 'no' = 'tutti';

  constructor(private deliveryService: DeliveryService) {}

  ngOnInit(): void {
    this.loadConsegne();
  }

  loadConsegne(): void {
    this.deliveryService.deliveries$.subscribe(consegne => {
      let filtered = [...consegne];

      if (this.filtroNome.trim() !== '') {
        filtered = filtered.filter(c =>
          c.nominativo.toLowerCase().includes(this.filtroNome.trim().toLowerCase())
        );
      }


      if (this.filtroStato !== 'tutti') {
        const isDelivered = this.filtroStato == 'si';
        filtered = filtered.filter(c => c.consegnato == isDelivered);
      }


      this.listaConsegne = filtered.sort((a, b) =>
        new Date(b.data).getTime() - new Date(a.data).getTime()
      );
    });
  }

  editDelivery(consegna: Delivery): void {
    this.selectedDelivery = { ...consegna };
  }

  deleteDelivery(id: number, consegnato: boolean): void {
    if (consegnato) {
      this.deliveryService.delete(id).subscribe(() => this.loadConsegne());
    } else {
      alert('Puoi eliminare solo consegne già contrassegnate come "consegnato".');
    }
  }

  segnaComeConsegnato(consegna: Delivery): void {
    if (!consegna.consegnato) {
      this.deliveryService.update(consegna.id, { consegnato: true })
        .subscribe(() => this.loadConsegne());
    }
  }

  mostraDettagli(consegna: Delivery): void {
    this.dettagliDelivery = consegna;
  }

  resetForm(): void {
    this.selectedDelivery = null;
  }

  onFiltroNomeChange(): void {
    this.loadConsegne();
  }

  onFiltroStatoChange(): void {
    this.loadConsegne();
  }

  salvaConsegna(consegna: Delivery): void {
  if (consegna.id) {
    this.deliveryService.update(consegna.id, consegna).subscribe(() => this.resetForm());
  } else {
    this.deliveryService.add(consegna).subscribe(() => this.resetForm());
  }
}

}
