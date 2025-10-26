import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  changeOnlineStatus(userId: number, status: boolean) {
    return this.http.patch<User>(`${this.apiUrl}/${userId}`, { isOnline: status });
  }


  getOnlineUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}?isOnline=true`);
  }
}
