import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clienti-milano',
  templateUrl: './clienti-milano.component.html',
  styleUrls: ['./clienti-milano.component.css']
})
export class ClientiMilanoComponent {

  @Input()
  clientiFiglio!: any[];


    cercaMilano() {
    let count = 0;
    for (let elem of this.clientiFiglio) {
      if (elem.abitazione== 'milano') {
        console.log('numero clienti che vivono a milano',elem);
      }
    }
  }

}
