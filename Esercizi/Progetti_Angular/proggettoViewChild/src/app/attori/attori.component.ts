import { Component, ViewChild } from '@angular/core';
import { ListaComponent } from '../lista/lista.component';

@Component({
  selector: 'app-attori',
  standalone: false,
  templateUrl: './attori.component.html',
  styleUrl: './attori.component.css'
})
export class AttoriComponent {
  @ViewChild(ListaComponent)
    lista!: ListaComponent;

    attori:string[]=["attore1", "attore2", "attore3"]

    ngAfterViewInit(){
        this.lista.loadData(this.attori);
    }
}
