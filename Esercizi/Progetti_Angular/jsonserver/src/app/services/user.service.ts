import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/users'

  constructor(private http: HttpClient) { }

  getUsers():Observable <User[]>{
    return this.http.get<User[]>(this.apiUrl)
  }

  addUser(user: Omit<User, 'id'>): Observable<User>{
    return this.http.post<User>(this.apiUrl, user)
  }

  updateUser(user:User): Observable<User>{
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user)
  }

  deleteUser(id:number): Observable<any>{
   return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
