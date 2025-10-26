import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

interface Utente {
  username: string;
  password: string;
}

@Component({
  selector: 'app-formregistrazione',
  templateUrl: './formregistrazione.component.html',
  styleUrls: ['./formregistrazione.component.css']
})

export class FormregistrazioneComponent {
  constructor(private router: Router) { }


  username = '';
  password = '';
  errore = false;


  utentiAutorizzati: Utente[] = [
    { username: 'giulia', password: '1234' },
    { username: 'luca', password: 'abcd' },
    { username: 'martina', password: 'passw0rd' }
  ];

  onSubmit() {
    this.errore = false;
    const utenteValido = this.utentiAutorizzati.find(
      u => u.username === this.username && u.password === this.password
    );

    if (utenteValido) {
      Swal.fire({
        icon: 'success',
        title: `Benvenuto ${this.username}!`,
        showConfirmButton: false,
        timer: 2000
      }).then(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.errore = true;
      Swal.fire({
        icon: 'error',
        title: 'Accesso negato',
        text: 'Username o password errati'
      });
    }
  }
}
