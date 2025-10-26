import { Component } from '@angular/core';
import { LibroService } from '../services/libro.service';
import { HttpClient } from '@angular/common/http';
import { Libri } from 'src/Libri';
import { Libropreso } from '../services/libropreso.service';

@Component({
  selector: 'app-elencolibri',
  templateUrl: './elencolibri.component.html',
  styleUrls: ['./elencolibri.component.css']
})
export class ElencolibriComponent {
  libri: Libri[] = []
  constructor(
    private libroService: LibroService,
    private libroPresiService: Libropreso,
    private http: HttpClient
  ) { }


  ngOnInit() {
    this.libroService.loadProduct();
    this.libroService.products$.subscribe(libri => {
      this.libri = libri;
    });
  }

  addToChart(libro: Libri) {
    if (libro.disponibili > 0) {

      libro.disponibili--;

      this.http.patch(`http://localhost:3000/libro/${libro.id}`, { disponibili: libro.disponibili })
        .subscribe(() => {
          this.libroPresiService.addToCart(libro);
          this.libri = this.libri.map(l => l.id === libro.id ? { ...l, disponibili: libro.disponibili } : l);
        });
    }
  }

}
