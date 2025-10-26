import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { User } from '../models/User';

@Component({
  selector: 'app-userstatus',
  templateUrl: './userstatus.component.html',
  styleUrls: ['./userstatus.component.css']
})
export class UserstatusComponent {

  listaUser: User[] = [];
  email!: string;

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]]

  })

  constructor(private userService: UserService, private fb: FormBuilder) { }


  subscribeUser() {
    this.userService.users$.subscribe(p => {
      this.listaUser = p
    })
  }



changeStatus(status: boolean) {
  const email = this.form.get('email')?.value;
  const selecteUser = this.listaUser.find(user => user.email == email);

  if (!selecteUser) {
    console.warn("Nessun utente trovato con email:", email);
    return;
  }

  this.userService.updateStatus(selecteUser.id, status).subscribe(() => {
    console.log("Utente aggiornato:", email, status);
    
  });

}


  ngOnInit() {
    this.userService.loadUsers();
    this.subscribeUser()
  }

}
