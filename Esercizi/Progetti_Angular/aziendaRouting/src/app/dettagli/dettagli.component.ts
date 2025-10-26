import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.css']
})
export class DettagliComponent {
  id!: number;
  immagine: any;

  immagini = [
    { id: 1, src: 'assets/images/aziendaImg.jpg', titolo: 'Evento 2024', descrizione: 'Meeting annuale' },
    { id: 2, src: 'assets/images/aziendaImg.jpg', titolo: 'Progetto X', descrizione: 'Fase di sviluppo' },
    { id: 3, src: 'assets/images/aziendaImg.jpg', titolo: 'Team Day', descrizione: 'Giornata aziendale' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.immagine = this.immagini.find(img => img.id == this.id);
  }
}
