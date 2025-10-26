import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private url = 'http://localhost:3000/users'

  private loginStatus = false;

  constructor() { }

  login() {
    this.loginStatus = true;
  }

  logout() {
    this.loginStatus = false
  }

  checkLoginStatus() {
    return this.loginStatus
  }


}
