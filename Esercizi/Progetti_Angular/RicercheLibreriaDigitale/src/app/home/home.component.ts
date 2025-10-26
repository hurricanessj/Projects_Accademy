import { Component } from '@angular/core';
import { Libri } from '../Libri';
import { LibriService } from '../service/libri.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listaLibri: Libri[] = [];
  selectedLibro: Libri | null = null;
  dettagliLibri: Libri | null = null;

  constructor(private libService: LibriService) { }

  loadLibri() {
    this.libService.getLibri().subscribe((lib) => this.listaLibri = lib)
  }

  ngOnInit() {
    this.loadLibri();
  }

  resetForm() {
    this.selectedLibro = null;
  }

  saveLibro(lib: Libri) {
    lib.favorite = lib.favorite == true;

    if (lib.id) {

      this.libService.updateLibro(lib).subscribe(() => this.loadLibri())

    } else {
      const { id, ...operaToAdd } = lib;
      this.libService.addLibro(operaToAdd).subscribe(() => this.loadLibri());

    }
    this.resetForm()
  }

  editLibro(libro: Libri) {
    console.log(libro)
    this.selectedLibro = { ...libro }
  }

  deleteLibro(id: any) {
    this.libService.deleteLibro(id).subscribe(() => this.loadLibri())
  }

  mostraDettagli(lib: Libri) {
    this.dettagliLibri = lib;
  }

  termineRicerca: string = '';

  filtraLibri(): Libri[] {
    const termine = this.termineRicerca.toLowerCase().trim();
    if (!termine) return this.listaLibri;

    return this.listaLibri.filter(libro =>
      libro.title.toLowerCase().includes(termine) ||
      libro.author.toLowerCase().includes(termine)
    );
  }


}
