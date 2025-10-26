import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.css']
})
export class PrimoComponent {

  @Input()
  dato!: {nome: string}

  persona={
    nome:'davide',cognome:'rubinacci'
  }

  mostraFullName(e:any){
    alert(e)
  }

}
