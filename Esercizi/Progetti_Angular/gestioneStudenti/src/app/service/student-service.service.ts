import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../model/Student';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private apiUrl = 'http://localhost:3000/students'
  private studentsSubject = new BehaviorSubject<Student[]>([]);
  students$ = this.studentsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadStudent();
  }

  loadStudent() {
    this.http.get<Student[]>(this.apiUrl).subscribe(studente => {
      this.studentsSubject.next(studente);
    })
  }

  addStudente(studente: Omit<Student, 'id'>) {
    this.http.post<Student>(this.apiUrl, studente).subscribe(newStudente => {
      const update = [...this.studentsSubject.value, newStudente]
      this.studentsSubject.next(update);
    })
  }

  updateStudente(studente: Student) {
    console.log(studente);
    this.http.put<Student>(`${this.apiUrl}/${studente.id}`, studente).subscribe(updatedStudent => {
      const list = this.studentsSubject.value.map(s => s.id == studente.id ? updatedStudent : s)
      this.studentsSubject.next(list);
    })
  }

  deleteStudent(id: number) {
    console.log(id)
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      const updated = this.studentsSubject.value.filter(s => s.id !== id)
      this.studentsSubject.next(updated);
    })
  }

  getStudentById(id: number) {
    return this.studentsSubject.value.find(s => s.id == id)
  }

}
