import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css']
})
export class ZooComponent {

  @Input()
  inputCategoria!: string

  listaAnimali: any[] = [
    { categoria: 'Felini', esemplari: ['Leone', 'Tigre', 'Ghepardo', 'Leopardo'] },
    { categoria: 'Canidi', esemplari: ['Lupo', 'Volpe', 'Coyote', 'Sciacallo'] },
    { categoria: 'Anfibi', esemplari: ['Rana verde', 'Salamandra pezzata', 'Rospo comune', 'Axolotl'] },
    { categoria: 'Rettili', esemplari: ['Cobra reale', 'Iguana', 'Camaleonte', 'Tartaruga'] }
  ];

  popolaSelect() {
    this.animaliSelect = this.listaAnimali.find(a => a.categoria == this.inputCategoria).esemplari
  }
  
  animaliSelect!: string[] | undefined;
}
