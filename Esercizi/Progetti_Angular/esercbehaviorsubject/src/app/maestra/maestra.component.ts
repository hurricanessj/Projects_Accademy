import { Component } from '@angular/core';
import { CompitiService } from '../service/compiti.service';

@Component({
  selector: 'app-maestra',
  templateUrl: './maestra.component.html',
  styleUrls: ['./maestra.component.css']
})
export class MaestraComponent {
  compito: string = '';

  constructor(private compitiService: CompitiService) { }

  ngOnInit() {
    this.compitiService.currentMessage.subscribe(mess => this.compito = mess)
  }

  sendCompito() {
    this.compitiService.changeCompiti(this.compito);
  }
}