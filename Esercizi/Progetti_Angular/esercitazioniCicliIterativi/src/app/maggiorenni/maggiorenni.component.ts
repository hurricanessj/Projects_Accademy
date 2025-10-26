import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-maggiorenni',
  templateUrl: './maggiorenni.component.html',
  styleUrls: ['./maggiorenni.component.css']
})
export class MaggiorenniComponent {
  @Input()
  listUtentiMin!: any[];
  
  
  cercaMaggiorenni() {
    let elem = this.listUtentiMin.filter(e => e.eta < 18)
    console.log(elem)
    
  }
  
  
  calcoloMigliorMedia() {
   let migliorMedia = this.listUtentiMin[0]
    for (let elemCorrente of this.listUtentiMin) {
      if (elemCorrente.media > migliorMedia.media) {
        migliorMedia = elemCorrente;
      }
    }
    console.log('miglior media', migliorMedia)
  }

}
