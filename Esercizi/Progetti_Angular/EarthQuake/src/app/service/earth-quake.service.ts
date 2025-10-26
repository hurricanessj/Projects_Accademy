import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EarthQuakeService {
  private apiUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=20';

  constructor(private http: HttpClient) {}

  getEarthquakes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  
}
