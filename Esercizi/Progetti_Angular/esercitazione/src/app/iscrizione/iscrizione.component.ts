import { Component } from '@angular/core';

@Component({
  selector: 'app-iscrizione',
  templateUrl: './iscrizione.component.html',
  styleUrls: ['./iscrizione.component.css']
})
export class IscrizioneComponent {
  quotaIscrizione: number = 20
  currentUser!: any;
  getUserInfo(user: any) {
    this.currentUser = user;
  }


  getQuotaAnnuale(){
    
    return this.quotaIscrizione*12
  }

}
