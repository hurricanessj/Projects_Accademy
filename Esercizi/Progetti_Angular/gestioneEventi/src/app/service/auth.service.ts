import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { Utente } from '../model/Utente';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenSubject = new BehaviorSubject<string | null>(null);
  token$ = this.tokenSubject.asObservable();

  private url = 'http://localhost:8080/utente';

  constructor(private http: HttpClient, private router: Router) {
    const savedToken = sessionStorage.getItem('jwt-token');
    if (savedToken) {
      this.tokenSubject.next(savedToken);
    }
  }

  async login(username: string, pwd: string) {
    const token = await firstValueFrom(
      this.http.post(this.url + '/login', null, {
        params: { username, pwd },
        responseType: 'text'
      })
    );

    if (token && !token.includes('Credenziali non valide')) {
      sessionStorage.setItem('jwt-token', token);
      this.tokenSubject.next(token);

      console.log('Login avvenuto con successo. Token:', token);
      this.router.navigate(['/home']);
      return token;
    } else {
      throw new Error('Credenziali errate');
    }
  }

  logout() {
    sessionStorage.removeItem('jwt-token');
    this.tokenSubject.next(null);
  }

  getIsLoggedIn(): boolean {
    return !!this.tokenSubject.value;
  }

  getToken(): string | null {
    return this.tokenSubject.value;
  }

  getRole(): string | null {
    const token = this.getToken();
    if (!token) return null;

    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.role || null;
  }
}
