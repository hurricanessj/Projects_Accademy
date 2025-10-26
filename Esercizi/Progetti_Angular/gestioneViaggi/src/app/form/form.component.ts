import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  mete: { id: number, nome: string, costoBase: number }[] = [];

  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    meta: new FormControl('', [Validators.required]),
    numeroPersone: new FormControl(1, [Validators.required, Validators.min(1)])
  });


  setMete(mete: { id: number, nome: string, costoBase: number }[]) {
    this.mete = mete;
  }
  
  getDati() {
    return this.userForm.value;
  }

  invia() {
    if (this.userForm.valid) {
      const valori = this.userForm.value;
      const metaScelta = this.mete.find(m => m.id == Number(valori.meta));
      const numeroPersone = valori.numeroPersone || 1;

      if (metaScelta) {
        const costoTotale = metaScelta.costoBase * numeroPersone;
        console.log('Dati utente:', valori);
        console.log(`Totale: €${costoTotale}`);
      }
    }
  }


}
