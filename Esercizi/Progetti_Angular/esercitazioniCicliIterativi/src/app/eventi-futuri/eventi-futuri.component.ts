import { Component, Input } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-eventi-futuri',
  templateUrl: './eventi-futuri.component.html',
  styleUrls: ['./eventi-futuri.component.css']
})
export class EventiFuturiComponent {

@Input()
eventi!: any[]

eventiFuturi() {
  const datarif = new Date('2022-05-05');
  let dateFiltrate = this.eventi.filter(ev => ev.data > datarif);
  console.log(dateFiltrate);
}

}
