import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stampapari',
  templateUrl: './stampapari.component.html',
  styleUrls: ['./stampapari.component.css']
})
export class StampapariComponent {
  @Input()
  listaNumeri!:number[];

stampaPari(){
  this.listaNumeri.forEach(numero => {
    if(numero %2==0){
      console.log(numero)
    }
  });
}

stampaPariInline() {
  this.listaNumeri.forEach(numero => numero % 2 == 0 ? console.log('secondo metodo:\n',numero) : null);
}

}
