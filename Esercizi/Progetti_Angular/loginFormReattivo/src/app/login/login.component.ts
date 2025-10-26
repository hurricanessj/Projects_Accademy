import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { User } from '../models/User';
import { AuthService } from '../service/auth.service';

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

  constructor(private fb: FormBuilder, public authService: AuthService, private router: Router){}

  onSubmit(){
    let {email, password} = this.form.value
    console.log(email, password);
    
    this.authService.login(email!, password!).then((user: User[]) => {
      console.log(user);
      

      this.router.navigate(['/projects'])
      
    }).catch(err => console.error(err)
    
    )
  }

}
