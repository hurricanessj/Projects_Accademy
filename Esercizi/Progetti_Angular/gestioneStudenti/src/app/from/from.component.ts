import { Component, Input, SimpleChanges } from '@angular/core';
import { Student } from '../model/Student';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentServiceService } from '../service/student-service.service';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent {
  @Input()
  selectedStudent?: Student;

  form = this.fb.group({
    name: ['', Validators.required],
    age: [0, [Validators.required, Validators.min(3)]],
    class: ['', Validators.required]
  })
  constructor(private fb: FormBuilder, private studenteService: StudentServiceService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedStudent'] && this.selectedStudent) {
      this.form.patchValue(this.selectedStudent);
    } else {
      this.form.reset({
        name: '',
        age: 0,
        class: ''
      })
    }
  }

  submit() {
    if (this.form.invalid)
      return;

    const studentData = this.form.value as Omit<Student, 'id'>;
    if (this.selectedStudent) {
      const updatedStudent: Student = {
        ...this.selectedStudent,
        ...studentData
      }
      this.studenteService.updateStudente(updatedStudent)
    } else {
      this.studenteService.addStudente(studentData)
    }

    this.form.reset({
      name: '',
      age: 0,
      class: ''
    })
  }
}