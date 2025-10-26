import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/users';
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    const savedUser = sessionStorage.getItem('user');
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
    }
  }


  login(email: string, password: string): Observable<User | null> {
    return this.http.get<User[]>(`${this.baseUrl}?email=${email}&password=${password}`).pipe(
      map(users => {
        const user = users[0];
        if (user) {
          sessionStorage.setItem('user', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        }
        return null;
      })
    );
  }

  logout(): void {
    sessionStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }

  checkLoginStatus(): boolean {
    return !!this.currentUserSubject.value;
  }

  getUserRole(): 'admin' | 'user' | null {
    return this.currentUserSubject.value?.role ?? null;
  }


  hasRole(role: 'admin' | 'user'): boolean {
    return this.currentUserSubject.value?.role == role;
  }

}