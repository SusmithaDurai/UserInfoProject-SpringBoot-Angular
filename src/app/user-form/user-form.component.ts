import { UserServiceService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
user:User;
  constructor(private userService:UserServiceService,private router:Router) {
    this.user=new User();
   }

  ngOnInit(): void {

    
  }

  onSubmit(){
    console.log(this.user);
    this.userService.save(this.user).subscribe(result=>this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }


}
