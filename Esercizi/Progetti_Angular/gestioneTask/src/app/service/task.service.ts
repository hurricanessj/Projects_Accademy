import { Injectable } from '@angular/core';
import { Task } from '../models/Task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3000/tasks'
  constructor(private http: HttpClient) {}

  getTask(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }

  addTask(t: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, t)
  }

  updateTask(task: Task): Observable<Task>{
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task)
  }

  deleteTask(id: number): Observable<Task>{
    return this.http.delete<Task>(`${this.apiUrl}/${id}`)
  }

}
