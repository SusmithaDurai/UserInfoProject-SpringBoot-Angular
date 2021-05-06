import { UserServiceService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService:UserServiceService) { }
  users:User[];
  ngOnInit(): void {
      this.userService.getUsers().subscribe(data=>{
        console.log(data);
        this.users=data;
      });
  }

}
