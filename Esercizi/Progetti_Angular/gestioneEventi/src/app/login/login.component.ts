import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Utente } from '../model/Utente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, public authService: AuthService, private router: Router) { }

  onSubmit() {
    let { username, password } = this.form.value
    console.log(username, password);

    this.authService.login(username!, password!).then((token: string) => {
      console.log("Token ricevuto:", token);
      this.router.navigate(['/home']);
    }).catch(err => console.error(err)

    )
  }

}
