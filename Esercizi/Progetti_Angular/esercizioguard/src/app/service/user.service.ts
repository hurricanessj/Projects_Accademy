import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {
    this.getUsers()
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`)
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user)
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/${user.id}`, user)
  }
  deleteUser(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }

}
