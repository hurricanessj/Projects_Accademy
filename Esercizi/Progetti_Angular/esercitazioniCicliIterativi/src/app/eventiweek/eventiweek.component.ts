import { Component } from '@angular/core';

@Component({
  selector: 'app-eventiweek',
  templateUrl: './eventiweek.component.html',
  styleUrls: ['./eventiweek.component.css']
})
export class EventiweekComponent {

eventiPassati!: any;
  getEventiFiglio(eventi: any[]){
this.eventiPassati=eventi; 
}
}
