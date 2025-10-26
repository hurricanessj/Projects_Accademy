import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { User } from '../models/User';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  private url = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {}

  async login(email: string, password: string): Promise<User> {
    const response = await firstValueFrom(
      this.http.get<User[]>(this.url, { params: { email, password } })
    );

    const user = response[0];

    if (!user) {
      throw new Error('Credenziali errate');
    }

    this.userService.changeOnlineStatus(user.id, true).subscribe({
      next: () => console.log('Utente online'),
      error: err => console.error('Errore nel cambio stato online:', err)
    });

    this.userSubject.next(user);
    return user;
  }

  logout(): void {
    const user = this.userSubject.value;

    if (user) {
      this.userService.changeOnlineStatus(user.id, false).subscribe({
        next: () => console.log('Utente offline'),
        error: err => console.error('Errore nel logout:', err)
      });
    }

    this.userSubject.next(null);
  }

  getIsLoggedIn(): boolean {
    return this.userSubject.value !== null;
  }

  getRole(): string | undefined {
    return this.userSubject.value?.role;
  }

  getCurrentUser(): User | null {
    return this.userSubject.value;
  }

}
