import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  immagini = [
    { id: 1, src: 'assets/images/aziendaImg.jpg', titolo: 'Evento 2024', descrizione: 'Meeting annuale' },
    { id: 2, src: 'assets/images/aziendaImg.jpg', titolo: 'Progetto X', descrizione: 'Fase di sviluppo' },
    { id: 3, src: 'assets/images/aziendaImg.jpg', titolo: 'Team Day', descrizione: 'Giornata aziendale' }
  ];

}
