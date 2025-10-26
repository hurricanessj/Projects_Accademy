import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contanomiperlettera',
  templateUrl: './contanomiperlettera.component.html',
  styleUrls: ['./contanomiperlettera.component.css']
})
export class ContanomiperletteraComponent {

  @Input()
  nomi!: string[];

  cercaNomiPerA() {
    let count = 0;
    for (let elem of this.nomi) {
      if (elem.startsWith('a')) {
        count++;
      }
      console.log(count);
    }
  }
}
