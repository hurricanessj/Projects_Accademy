import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cercaelemento2',
  templateUrl: './cercaelemento2.component.html',
  styleUrls: ['./cercaelemento2.component.css']
})
export class Cercaelemento2Component {

  @Input()
  listaNumeri!: number[];
  @Input()
  cercaNumero!: number;

  trovato = false;

  cercaElemento() {
    for (let elem of this.listaNumeri) {
      if (elem == this.cercaNumero) {
        this.trovato == true;
        break
      }else{
        console.log(this.trovato)
      }
    }
  }
}
