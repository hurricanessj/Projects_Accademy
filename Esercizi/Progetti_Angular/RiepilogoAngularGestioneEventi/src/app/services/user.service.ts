import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/users';

  private currentUser$ = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<User | null> {
    return this.http
      .get<User[]>(`${this.baseUrl}?email=${email}&password=${password}`)
      .pipe(
        map(users => users[0] ?? null),
        tap(user => {
          if (user) {
            this.currentUser$.next(user);
            localStorage.setItem('user', JSON.stringify(user));
          }
        })
      );
  }

  logout(): void {
    this.currentUser$.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  getUser(): User | null {
    return this.currentUser$.value;
  }

  isLoggedIn(): boolean {
    return !!this.currentUser$.value;
  }

  hasRole(role: string): boolean {
    return this.currentUser$.value?.role == role;
  }

  getUsername(): string {
    return this.currentUser$.value?.email ?? '';
  }

  restoreSession() {
    const user = localStorage.getItem('user');
    if (user) {
      this.currentUser$.next(JSON.parse(user));
    }
  }
}