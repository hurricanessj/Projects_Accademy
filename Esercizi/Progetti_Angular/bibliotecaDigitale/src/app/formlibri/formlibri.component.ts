import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Book } from '../models/Book';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-formlibri',
  templateUrl: './formlibri.component.html',
  styleUrls: ['./formlibri.component.css']
})
export class FormlibriComponent {
form!: FormGroup;

@Output()
save = new EventEmitter<Book>()

@Input()
book: Book | null = null;


constructor(fb: FormBuilder, protected authService: AuthService){
  this.form = fb.group({
    id : [null],
    title: ['', Validators.required],
    description: ['', Validators.required],
    author:['', Validators.required]
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

ngOnChanges(changes: SimpleChanges) {
  if (changes['book'] && this.book) {
    this.form.patchValue(this.book);
  }
}
}
