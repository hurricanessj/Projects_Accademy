import { Component } from '@angular/core';
import { Videogiochi } from '../model/Videogiochi';
import { VideogiocoService } from '../service/videogioco.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.css']
})
export class DettagliComponent {
  game!: Videogiochi;


}
