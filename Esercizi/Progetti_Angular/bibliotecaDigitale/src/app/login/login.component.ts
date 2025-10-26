import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, public authService: AuthService, private router: Router) { }

  onSubmit() {
    const { email, password } = this.form.value;

    this.authService.login(email!, password!).then((user) => {

      console.log('Utente loggato:', user);
      this.router.navigate(['/home']);
      
    }).catch(err => {
      console.error(err);
    });
  }

}
