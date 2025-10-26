import { Component, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-figlio',
  standalone: false,
  templateUrl: './figlio.component.html',
  styleUrl: './figlio.component.css'
})
export class FiglioComponent {
  @ViewChild('paragrafo') paragrafoRef!: ElementRef;

  cambiaColoreParagrafo(colore: string) {
    this.paragrafoRef.nativeElement.style.color = colore;
  }

}
