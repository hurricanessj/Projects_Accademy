import { Component } from '@angular/core';
import { CompitiService } from '../service/compiti.service';

@Component({
  selector: 'app-alunno',
  templateUrl: './alunno.component.html',
  styleUrls: ['./alunno.component.css']
})
export class AlunnoComponent {
    compiti: string = ''
  
    constructor(private compitiServ: CompitiService){}
  
    ngOnInit(){
      this.compitiServ.currentMessage.subscribe(c => this.compiti = c)
    }
  
    sendCompiti(){
      this.compitiServ.changeCompiti('compiti svolti')
    }

}
