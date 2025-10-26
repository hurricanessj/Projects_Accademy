import { Component, ViewChild } from '@angular/core';
import { FormComponent } from './form/form.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestioneViaggi';

  mete = [
    { id: 1, nome: 'Parigi', costoBase: 500 },
    { id: 2, nome: 'Tokyo', costoBase: 1200 },
    { id: 3, nome: 'New York', costoBase: 1000 },
    { id: 4, nome: 'Barcellona', costoBase: 450 },
    { id: 5, nome: 'Dubai', costoBase: 1100 }
  ];

  @ViewChild('formRef') formComponent!: FormComponent;


ngAfterViewInit() {
  setTimeout(() => {
    this.formComponent.setMete(this.mete);
  });
}

  prenotazione: any = null;
  
  mostraDettagli() {
    const valori = this.formComponent.getDati();
    const meta = this.mete.find(m => m.id == Number(valori.meta));
    const numeroPersone = valori.numeroPersone || 1;

    if (meta) {
      const costoTotale = meta.costoBase * numeroPersone;
      this.prenotazione = {...valori, meta, costoTotale};
    }
  }
}