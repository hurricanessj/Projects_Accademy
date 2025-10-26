import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Opera } from '../models/Opera';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formopere',
  templateUrl: './formopere.component.html',
  styleUrls: ['./formopere.component.css']
})
export class FormopereComponent {

  @Output()
  save = new EventEmitter<Opera>()

  @Input()
  opera: Opera | null = null;

  form!: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      id: [null],
      titolo: ['', Validators.required],
      autore: ['', Validators.required],
      stanza: ['', Validators.required],
      paeseOrigine: ['', Validators.required],
      dataRealizzazione: ['', Validators.required],
      stato: ['', Validators.required],
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

    console.log(change['opera'])

    if (change['opera'] && this.opera) {

      this.form.patchValue(this.opera)

    }

  }

}
