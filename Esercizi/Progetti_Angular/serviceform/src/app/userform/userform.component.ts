import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utente } from '../models/Utente';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent {

form!: FormGroup;

@Output()
save = new EventEmitter<Utente>()

@Input()
user: Utente | null = null;


constructor(fb: FormBuilder){
  this.form = fb.group({
    id : [null],
    nome: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]]
  })
}

onSubmit(){
if(this.form.valid){
  this.save.emit(this.form.value)
  console.log('vedi id',this.form.value)
}
}

resetForm(){
  this.form.reset()
}

ngOnChanges(change: SimpleChanges){

  console.log(change['user'])

  if(change['user'] && this.user){

    this.form.patchValue(this.user)

  }

}

}
