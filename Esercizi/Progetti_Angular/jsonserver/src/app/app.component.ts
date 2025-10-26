import { Component } from '@angular/core';
import { User } from './User';
import { UserService } from './services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jsonserver';
  
    selectedUser: User | null = null;

  userForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cognome: new FormControl('', [Validators.required])
  })

  users: User[] = []
  
  constructor(private userService: UserService) { }
  
  ngOnInit() {
    this.getUsers()
  }
  
  addUser(newUser: any) {
    this.userService.addUser(newUser).subscribe({
      next: () => this.getUsers(),
      error: err => console.log('errore', err)
    })
  }
  
  getUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data
      },
      error: err => {
        console.log('errore', err);
      }
    })
  }

  updateUser() {
    if (!this.selectedUser) return;
    
  const updatedUser: User = {
    ...this.selectedUser,
    nome: this.userForm.value.nome || '',
    cognome: this.userForm.value.cognome || ''
  };

  this.userService.updateUser(updatedUser).subscribe({
    next: () => {
      this.getUsers();
      this.selectedUser = null;
      this.userForm.reset();
    },
    error: err => console.log('errore', err)
  });
}


  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: () => this.getUsers(),
      error: err => console.error('errore', err),
    });
    
  }

  openEditModal(user: User): void {
  this.selectedUser = user;
  this.userForm.patchValue({
    nome: user.nome,
    cognome: user.cognome
  });
  }
  

}
