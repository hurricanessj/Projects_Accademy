import { Component } from '@angular/core';

@Component({
  selector: 'app-ca-pipe',
  standalone: false,
  templateUrl: './ca-pipe.component.html',
  styleUrl: './ca-pipe.component.css',
})
export class CaPipeComponent {
  dataoggi: Date;
  constructor(){
    this.dataoggi = new Date();
  }

}
