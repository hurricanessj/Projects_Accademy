import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(protected authService: AuthService, private router: Router) { }

  login() {
    this.authService.login()
    this.router.navigate(['/home'])
  }

  home(){
    this.router.navigate(['/home'])
  }

}
