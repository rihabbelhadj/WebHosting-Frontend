import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Serveur} from '../../models/serveur';
import {User} from '../../models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
 public   userList :User;
 user:User;
  firstName: string;
  userName:string;
  email:string;
  lastName:string;
  phone:string;
  entreprise:String;
  constructor(private userService:UserService) { }

  ngOnInit() {
    var test = JSON.parse(localStorage.getItem('UserDetail'));

     this.firstName=JSON.parse(JSON.stringify(test.firstName));
     this.userName=JSON.parse(JSON.stringify(test.userName));
     this.email=JSON.parse(JSON.stringify(test.email));
     this.lastName=JSON.parse(JSON.stringify(test.lastName));
     this.phone=JSON.parse(JSON.stringify(test.phone));
     this.entreprise=JSON.parse(JSON.stringify(test.entreprise));
    localStorage.setItem('userid', JSON.stringify(test.id));
   var id =JSON.parse(localStorage.getItem('userid'));
   console.log(id);
    this.getbyuserid( id);
  }
  getbyuserid(id){
    this.userService.getUserByUserId(id).subscribe(res =>{
      this.userList=res;
    },err=>{
      console.log("error while fetching data")
    });
  }
}
