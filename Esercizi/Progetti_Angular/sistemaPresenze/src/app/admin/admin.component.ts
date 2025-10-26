import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../models/User';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['id', 'email', 'online'];
  dataSource = new MatTableDataSource<User>();
  clickedRows = new Set<User>();
  userList: User[] = [];
  selectedTask: User | null = null;

  constructor(private userService: UserService) { }

  loadUsersList() {
    this.userService.users$.subscribe(users => {
      this.userList = users;
    })
  }

  ngOnInit() {
    this.loadUsersList()
  }




}
