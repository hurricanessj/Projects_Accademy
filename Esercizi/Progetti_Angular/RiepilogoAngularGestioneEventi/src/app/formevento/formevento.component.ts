import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from '../Models/Events';
@Component({
  selector: 'app-formevento',
  templateUrl: './formevento.component.html',
  styleUrls: ['./formevento.component.css']
})
export class FormeventoComponent {
 @Output()
  save = new EventEmitter<Event>();

  @Input()
  evento: Event | null = null;

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      type: ['', Validators.required],
      city: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      createdBy: ['', Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['evento'] && this.evento) {
      this.form.patchValue(this.evento);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }

  resetForm() {
    this.form.reset();
  }
}
