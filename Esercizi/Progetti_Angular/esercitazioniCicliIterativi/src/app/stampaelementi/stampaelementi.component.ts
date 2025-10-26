import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stampaelementi',
  templateUrl: './stampaelementi.component.html',
  styleUrls: ['./stampaelementi.component.css']
})
export class StampaelementiComponent {

  @Input()
  prendiArray!: string[];

  stampaElementi(){
    for(let i=0; i<this.prendiArray.length; i++){
      console.log(this.prendiArray[i]);
    }
  }

}
