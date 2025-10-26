import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cercaelemento',
  templateUrl: './cercaelemento.component.html',
  styleUrls: ['./cercaelemento.component.css']
})
export class CercaelementoComponent {

  @Input()
  risultati!: any[];

  chiamaUtente() {
    let elem = this.risultati.find(personaggio => personaggio.id == 2)
    console.log(elem)
  }

}
