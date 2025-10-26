import { Component } from '@angular/core';
import { Utente } from 'src/models/Utente';
import { UtentiService } from '../services/utenti.service';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css']
})
export class UtenteComponent {
  utenti: Utente[] = [];
  utente!: Utente;

  currentUser = {
    id: 0,
    nome: '',
    cognome: '',
    eta: 0,
    indirizzo: '',
    dataNascita: '',
    telefono: '',
    email: '',
  };

  constructor(private utenteService: UtentiService) { }


  addUser(newUser: any) {
    this.utenteService.addUtenti(newUser).subscribe({
    next: () => this.caricaUtenti(),
    error: err => console.log('errore', err)
    })
  }

  caricaUtenti() {
    this.utenteService.getUtenti().subscribe((utenti) => {
      this.utenti = utenti
    })
  }

  updateUtente(utente: Utente) {
    let edit: Boolean = true
    this.currentUser = { ...utente }
    this.utenteService.updateUtenti(this.utente).subscribe({
      next: () => {
        this.caricaUtenti();
      },
      error: err => console.log('errore', err)
    })
    console.log(this.currentUser)

  }

  deleteUser(id: any) {
    this.utenteService.deleteUtente(id).subscribe({
      next: () => this.caricaUtenti(),
      error: err => console.error('errore', err),
    });
    
  }

  ngOnInit() {
    this.caricaUtenti()
  }
}
