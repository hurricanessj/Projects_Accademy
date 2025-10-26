import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.css']
})
export class FiglioComponent {
@Input()
messaggio!: string;

testo='testo base del figlio';


aggiungitesto(){
  this.testo+=this.messaggio
}


}
