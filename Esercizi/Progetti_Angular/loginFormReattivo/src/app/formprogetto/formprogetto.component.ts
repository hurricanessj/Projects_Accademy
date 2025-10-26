import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../models/Project';

@Component({
  selector: 'app-formprogetto',
  templateUrl: './formprogetto.component.html',
  styleUrls: ['./formprogetto.component.css']
})
export class FormprogettoComponent {
form!: FormGroup;

@Output()
save = new EventEmitter<Project>()

@Input()
prog: Project | null = null;


constructor(fb: FormBuilder){
  this.form = fb.group({
    id : [null],
    titolo: ['', Validators.required],
    descrizione: ['', Validators.required],
    deadLine:['', Validators.required]
  })
}

onSubmit(){
if(this.form.valid){
  this.save.emit(this.form.value)
}
}

resetForm(){
  this.form.reset()
}

ngOnChanges(change: SimpleChanges){

  console.log(change['prog'])

  if(change['prog'] && this.prog){

    this.form.patchValue(this.prog)

  }

}
}
