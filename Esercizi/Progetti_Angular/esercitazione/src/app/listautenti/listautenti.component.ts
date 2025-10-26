import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-listautenti',
  templateUrl: './listautenti.component.html',
  styleUrls: ['./listautenti.component.css']
})
export class ListautentiComponent {


  @Input()
  utentiFiglio: any[]=[];

  @Output()
  messaggioAlPadre = new EventEmitter()// evento che passera al padre la lista

  visualizzaEta(eta:number){
    alert(eta)
  }

  passaPadre(){//questo metodo verra usato per il bottone che farà un controllo sul utentiFiglio e poi farà l'event emitter di messaggioAlPadre
    if(this.utentiFiglio.length>2){
      this.messaggioAlPadre.emit("Maggiore di due");
    }else{
      this.messaggioAlPadre.emit("Minore di due");
    }
  }

}
