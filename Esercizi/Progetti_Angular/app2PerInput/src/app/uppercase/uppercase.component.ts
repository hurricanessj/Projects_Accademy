import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-uppercase',
  standalone: false,
  templateUrl: './uppercase.component.html',
  styleUrl: './uppercase.component.css'
})
export class UppercaseComponent {
  @Input()
  testo !: string

  @Output()
  testoChange = new EventEmitter<string>()

  trasformaInuppercase(){
    let testoTrasformato = this.testo.toUpperCase();
    this.testoChange.emit(testoTrasformato)
  }

}
