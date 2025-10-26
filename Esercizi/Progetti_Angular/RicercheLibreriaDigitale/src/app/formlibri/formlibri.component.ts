import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Libri } from '../Libri';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formlibri',
  templateUrl: './formlibri.component.html',
  styleUrls: ['./formlibri.component.css']
})
export class FormlibriComponent {
  @Output()
  save = new EventEmitter<Libri>()

  @Input()
  libro: Libri | null = null;

  form!: FormGroup;
  constructor(fb: FormBuilder){
    this.form = fb.group({
      id: [null],
      title: ['', Validators.required],
      author: ['', Validators.required],
      year:  ['', Validators.required],
      genere: ['', Validators.required],
      description: ['', Validators.required],
      favorite: ['', Validators.required],
    })
  }

    onSubmit() {
    if (this.form.valid) {
      this.save.emit(this.form.value)
      console.log('vedi id', this.form.value)
    }
  }

  resetForm() {
    this.form.reset()
  }

  ngOnChanges(change: SimpleChanges) {

    console.log(change['libro'])

    if (change['libro'] && this.libro) {

      this.form.patchValue(this.libro)

    }

  }

}
