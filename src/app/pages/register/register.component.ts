import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user:User;
  firstName: string;
  userName:string;
  email:string;
  lastName:string;
  phone:string;
  password:string;
  entreprise:string;
  userDetail !: FormGroup;
  userObj :User=new User;

  constructor( private userService:UserService ,private fromBuilder:FormBuilder, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.userDetail=this.fromBuilder.group({
      firstName:[this.firstName],
      lastName :[this.lastName],
      userName:[ this.userName],
      email:[this.email],
      phone:[this.phone],
      entreprise:[this.entreprise],
      password:[this.password]

    })
  }

  addUser() {

    this.userObj.firstName= this.userDetail.value.firstName;
    this.userObj.lastName= this.userDetail.value.lastName;
    this.userObj.userName= this.userDetail.value.userName;
    this.userObj.email= this.userDetail.value.email;
    this.userObj.entreprise= this.userDetail.value.entreprise;
    this.userObj.phone= this.userDetail.value.phone;
    this.userObj.password=this.userDetail.value.password;
    this.userObj.fullName='';
    this.userObj.type='client';
    this.userService.addUsers(this.userObj).subscribe(res =>{
      console.log(res);
      localStorage.setItem('UserDetail',JSON.stringify(res));
      this.toastr.success('Sccess update', 'You have been  successfully register ');
      this.router.navigate(['/pick-domaine']);
    },err =>{
      console.log(err);
    })
  }
}
