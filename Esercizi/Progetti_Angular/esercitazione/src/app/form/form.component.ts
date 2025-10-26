import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';//REACTIVE FORM
import { ViewChild } from '@angular/core';
import { IscrizioneComponent } from '../iscrizione/iscrizione.component';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


  form: FormGroup = this.fb.group({
    nome: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]]
  })


  constructor(private fb: FormBuilder) { }
  @ViewChild(IscrizioneComponent) iscrizione!: IscrizioneComponent;

  onSubmit() {
    console.log(this.form.value)
    this.iscrizione.getUserInfo(this.form.value)
  }





}
