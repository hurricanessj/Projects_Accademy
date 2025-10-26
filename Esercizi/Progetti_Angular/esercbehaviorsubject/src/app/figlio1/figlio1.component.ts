import { Component } from '@angular/core';
import { SharingdataService } from '../service/sharingdata.service';

@Component({
  selector: 'app-figlio1',
  templateUrl: './figlio1.component.html',
  styleUrls: ['./figlio1.component.css']
})
export class Figlio1Component {
  message: string = '';

  constructor(private sharingServ: SharingdataService) { }


  ngOnInit() {
    this.sharingServ.currentMessage.subscribe(mess => this.message = mess)
  }

  sendMessadge(){
    this.sharingServ.changeMessage('ciao')
  }
}
