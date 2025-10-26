import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Delivery } from '../Models/Delivery';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() consegna: Delivery | null = null;
  @Output() save = new EventEmitter<Delivery>();
  @Output() cancel = new EventEmitter<void>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      address: ['', Validators.required],
      product: ['', Validators.required],
      deliveryCode: ['', Validators.required],
      date: ['', Validators.required],
      details: [''],
      delivered: [false]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['consegna'] && this.consegna) {
      this.form.patchValue(this.consegna);
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }

  resetForm(): void {
    this.form.reset();
    this.cancel.emit();
  }
}
