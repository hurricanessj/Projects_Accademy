import { Component } from '@angular/core';
import { Candidatura } from '../model/Candidatura';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { OffertalavoroService } from '../service/offertalavoro.service';
import { OffertaLavoro } from '../model/OffertaLavoro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  offertaList: OffertaLavoro[] = [];
  selectedOfferta: OffertaLavoro | null = null

  constructor(private offertaService: OffertalavoroService, private router: Router, protected authService : AuthService) { }

loadOfferte() {
  this.offertaService.getAllOfferta().subscribe((off) => {
    this.offertaList = off;
    console.log('Offerte lavorative caricate:', this.offertaList);
  });
}

  ngOnInit() {
    this.loadOfferte();
  }

  saveOfferte( offerta: OffertaLavoro) {
    if (offerta.id) {

      this.offertaService.updateOfferta(offerta).subscribe(() => this.loadOfferte())

    } else {

      let offToAdd = { ...offerta }
      delete offToAdd.id

      console.log('offerta to add', offToAdd)
      this.offertaService.addOfferta(offToAdd).subscribe(() => this.loadOfferte())

    }
    this.resetForm()
  }

  editOff(offerta: OffertaLavoro) {
    console.log(offerta)
    this.selectedOfferta = { ...offerta }
  }

  deleteOff(id: any) {
    this.offertaService.deleteOfferta(id).subscribe(() => this.loadOfferte())

  }
  resetForm() {
    this.selectedOfferta = null
  }



}
