import { Component } from '@angular/core';
import { Utente } from '../models/Utente';
import { UtenteService } from '../service/utente.service';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  listaUtenti: Utente[] = []
  selectedUser: Utente | null = null

  constructor(private userService: UtenteService) { }

  loadUsers() {
    this.userService.getUsers().subscribe((users) =>
      this.listaUtenti = users)
  }

  ngOnInit() {
    this.loadUsers()
  }

  saveUser(user: Utente) {
    if (user.id) {

      this.userService.updateUser(user).subscribe(() => this.loadUsers())

    } else {

      let userToAdd = { ...user }
      delete userToAdd.id

      console.log('user to add', userToAdd)
      this.userService.addUser(userToAdd).subscribe(() => this.loadUsers())

    }
    this.resetForm()
  }

  editUser(user: Utente) {
    console.log(user)
    this.selectedUser = { ...user }
  }

  deleteUser(id: any) {
    this.userService.deleteUser(id).subscribe(() => this.loadUsers())
  }

  resetForm() {
    this.selectedUser = null
  }

}
