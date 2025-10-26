import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-lowercase',
  standalone: false,
  templateUrl: './lowercase.component.html',
  styleUrl: './lowercase.component.css'
})
export class LowercaseComponent {
 @Input()
  testo !: string

  @Output()
  testoChange = new EventEmitter<string>()

  trasformaInLowerCase(){
    let testoTrasformato = this.testo.toLowerCase();
    this.testoChange.emit(testoTrasformato)
  }
}