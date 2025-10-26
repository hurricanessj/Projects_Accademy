import { Component } from '@angular/core';
import { EarthQuakeService } from '../service/earth-quake.service';

@Component({
  selector: 'app-earthquake-list',
  templateUrl: './earthquake-list.component.html',
  styleUrls: ['./earthquake-list.component.css']
})
export class EarthquakeListComponent {
  earthquakes: any[] = [];

  constructor(private eqService: EarthQuakeService) {}

  ngOnInit(): void {
    this.eqService.getEarthquakes().subscribe(data => {
      this.earthquakes = data.features;
    });
  }

  
}
