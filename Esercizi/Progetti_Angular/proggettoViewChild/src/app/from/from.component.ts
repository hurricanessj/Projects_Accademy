import { Component } from '@angular/core';

@Component({
  selector: 'app-from',
  standalone: false,
  templateUrl: './from.component.html',
  styleUrl: './from.component.css'
})
export class FromComponent {
  nome!: string;
  cognome!: string;

  numero!: number;

  //per leggere i valori dei due campi di input dobbiamo fare una funzione per leggerei valori
  leggiValori(){
    console.log(this.nome);
    console.log(this.cognome);
  }
  somma(): number{
    return this.numero+10
  }
}
