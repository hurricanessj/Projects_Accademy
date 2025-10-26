import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';
  private userSubject = new BehaviorSubject<User[]>([]);
  users$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadUsers()
  }

  loadUsers() {
    this.http.get<User[]>(this.apiUrl).subscribe(user => {
      this.userSubject.next(user)
    })
  }

  updateUser(user: User) {
    console.log(user);
    this.http.put<User>(`${this.apiUrl}/${user.id}`, user).subscribe(updatedUser => {
      const list = this.userSubject.value.map(s => s.id == user.id ? updatedUser : s)
      this.userSubject.next(list);
    })
  }

  updateStatus(id: number, status: boolean) {
    return this.http.patch<User>(`${this.apiUrl}/${id}`, { online: status })
  }

  deleteUser(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      const updated = this.userSubject.value.filter(u => u.id !== id)
      this.userSubject.next(updated);
    })
  }


}
