import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  utente = {
    nome: '',
    email: ''
  };

  mtSubmit(form: NgForm) {
    console.log(form.value)
  }

  setForm: FormGroup = this.fb.group({
    nome:['', Validators.required],
    email:['', [Validators.email, Validators.required]]
  })

  constructor(private fb: FormBuilder) { }

  onSubmit(){
    console.log(this.setForm.value)
  }

}
