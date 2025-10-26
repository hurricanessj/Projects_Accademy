import { Component } from '@angular/core';
import { Libro } from '../Model/libro';
import { LibriService } from '../services/libri.service';

@Component({
  selector: 'app-listalibri',
  templateUrl: './listalibri.component.html',
  styleUrls: ['./listalibri.component.css']
})
export class ListalibriComponent {

  libri: Libro[]=[]

  constructor(private libriservice: LibriService){}



}
