import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  standalone: false,
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {

  /*
creare un componente newUser in cui inserire un form di registrazione.
I dati dovranno essere salvati in sessione al submit. 
Creare un secondo componente dettagli che al click di un bottone mostra
i dati dell'utente appena registrato
  */
  formUtente = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email])
  })
  salvaDati() {
    const dati = this.formUtente.value;
    const jsonString = JSON.stringify(dati);

    sessionStorage.setItem('datiUtente', jsonString);

    console.log('Dati salvati in sessionStorage:', jsonString);
  }
  
}
