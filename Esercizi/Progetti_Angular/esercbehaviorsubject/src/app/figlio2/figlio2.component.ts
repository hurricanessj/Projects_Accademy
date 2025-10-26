import { Component } from '@angular/core';
import { SharingdataService } from '../service/sharingdata.service';

@Component({
  selector: 'app-figlio2',
  templateUrl: './figlio2.component.html',
  styleUrls: ['./figlio2.component.css']
})
export class Figlio2Component {
  message: string = ''

  constructor(private sharingServ: SharingdataService){}

  ngOnInit(){
    this.sharingServ.currentMessage.subscribe(mess => this.message = mess)
  }

  sendMessage(){
    this.sharingServ.changeMessage('messaggio da figlio 2')
  }

}
