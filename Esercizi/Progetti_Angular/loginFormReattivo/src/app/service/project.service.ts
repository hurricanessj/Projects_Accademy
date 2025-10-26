import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private url = 'http://localhost:3000/projects'

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url)
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.url}/${id}`)
  }

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.url, project)
  }

  updateProject(project: Project): Observable<Project>{
    return this.http.put<Project>(`${this.url}/${project.id}`, project)
  }
  deleteProject(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }

  
  
}
