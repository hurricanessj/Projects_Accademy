import { Component } from '@angular/core';
import { StudentServiceService } from '../service/student-service.service';
import { Student } from '../model/Student';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {
  students: Student[] = [];
  selectedStudent?: Student;

  constructor(private studenteService: StudentServiceService) { }
  ngOnInit() {
    this.studenteService.students$.subscribe(data => this.students = data)
  }

  delete(id: number) {
    this.studenteService.deleteStudent(id)
  }

  select(student: Student) {
    this.selectedStudent = student;
  }

  add() {
    this.selectedStudent = undefined;
  }
  
}