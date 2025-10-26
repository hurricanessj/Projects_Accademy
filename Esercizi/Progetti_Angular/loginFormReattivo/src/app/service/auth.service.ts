import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<any>(null)
  user$ = this.userSubject.asObservable()

  private url = 'http://localhost:3000/users'
  
  constructor(private http: HttpClient) {
    const currUser = sessionStorage.getItem('user')
    if (currUser) {
      this.userSubject.next(JSON.parse(currUser))
    }
  }

  
  async login(email: string, password: string) {
    let response = await firstValueFrom(
      this.http.get<User[]>(this.url, { params: { email, password } }
      ))
      console.log(response);
      
      
      if (response) {
        
        this.userSubject.next(response)
        console.log(this.userSubject.value);

      sessionStorage.setItem('user', JSON.stringify(response))
      return response
    }
    throw new Error('Credenziali errati')
  }

  logout() {
    sessionStorage.removeItem('user')
    this.userSubject.next(null)
  }
  
  register(user: User) {
    this.http.post<User>(this.url, user)
  }

  getIsLoggedIn() {
    return !!this.userSubject.value
  }

  getRole() {
    return sessionStorage.length > 0 ? this.userSubject.value[0]?.ruolo : this.userSubject.value?.ruolo
  }
}
