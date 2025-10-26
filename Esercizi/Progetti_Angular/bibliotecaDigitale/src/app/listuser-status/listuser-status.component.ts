import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../models/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-listuser-status',
  templateUrl: './listuser-status.component.html',
  styleUrls: ['./listuser-status.component.css']
})
export class ListuserStatusComponent {
  userList: User[] = [];
  userOnlineList: User[] = [];

  constructor(private userService: UserService, protected authService: AuthService) { }

  loadUsersList() {
    this.userService.getOnlineUsers().subscribe(user => {
      this.userList = user;
      this.findUsersOnline();
      console.log('User list:', this.userList);
      console.log('online users:', this.userOnlineList);
    });
  }


  findUsersOnline() {
    this.userOnlineList = this.userList.filter(user => user.isOnline == true);
  }


  ngOnInit() {
    this.loadUsersList()
  }


}
