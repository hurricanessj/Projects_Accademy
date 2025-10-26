import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filtrolength',
  templateUrl: './filtrolength.component.html',
  styleUrls: ['./filtrolength.component.css']
})
export class FiltrolengthComponent {
  @Input()
  listaPersone!: string[];

  @Input()
  listaNumeri!: number[];

  filtraNome(){
    let utentiFiltrati = this.listaPersone.filter(p=>p.length>4)
    console.log(utentiFiltrati)
  }

  

}
