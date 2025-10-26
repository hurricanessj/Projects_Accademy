import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Task } from '../models/Task';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formtask',
  templateUrl: './formtask.component.html',
  styleUrls: ['./formtask.component.css']
})
export class FormtaskComponent {

  form!: FormGroup;

  @Output()
  saveTask = new EventEmitter<Task>()

  @Input()
  inputTask: Task | null = null;


  constructor(fb: FormBuilder) {
    this.form = fb.group({
      id: [null],
      titolo: ['', Validators.required],
      descrizione: ['', Validators.required],
      stato: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.form.valid) {
      const taskFormValue = this.form.value;
      console.log('Task da salvare:', taskFormValue);
      this.saveTask.emit(this.form.value)
    }
  }

  resetForm() {
    this.form.reset()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['inputTask'] && this.inputTask) {
      console.log('Task in arrivo:', this.inputTask);
      this.form.patchValue(this.inputTask);
      console.log('Form aggiornato:', this.form.value);
    }
  }
  

}
