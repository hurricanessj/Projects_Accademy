import { Component } from '@angular/core';
import { CrudService } from './service/crud.service';
import { Poi } from './models/Poi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudservice';

  pois!: Poi[];

  constructor(private poiService: CrudService) { }


  ngOnInit() {
    this.poiService.getPoi().subscribe({
      next: (data) => {
        this.pois = data
      },
      error: (err)=>{
        console.error("errore", err);
      }
    })
  }
}
