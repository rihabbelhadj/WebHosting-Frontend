import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user';
import{FormGroup, FormBuilder,FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  myGroup: any;
  user:User;
  firstName: string;
  userName:string;
  email:string;
  lastName:string;
  phone:string;
  entreprise:String;
  userDetail !: FormGroup;
  userObj :User=new User;
  constructor(private userService:UserService , private fromBuilder:FormBuilder,private router: Router, private toastr: ToastrService) { }

  ngOnInit() {

    var test = JSON.parse(localStorage.getItem('UserDetail'));

    this.firstName=JSON.parse(JSON.stringify(test.firstName));
    this.userName=JSON.parse(JSON.stringify(test.userName));
    this.email=JSON.parse(JSON.stringify(test.email));
    this.lastName=JSON.parse(JSON.stringify(test.lastName));
    this.phone=JSON.parse(JSON.stringify(test.phone));
    this.entreprise=JSON.parse(JSON.stringify(test.entreprise));
    this.userDetail=this.fromBuilder.group({
      firstName:[this.firstName],
      lastName :[this.lastName],
      userName:[ this.userName],
      email:[this.email],
      phone:[this.phone],
      entreprise:[this.entreprise],

    })
  }

  onSubmit(value: any) {

  }

  userupdate() {
console.log(this.userDetail);
var id =JSON.parse(localStorage.getItem('userid'));
this.userObj.id= id;
this.userObj.firstName= this.userDetail.value.firstName;
this.userObj.lastName= this.userDetail.value.lastName;
this.userObj.userName= this.userDetail.value.userName;
this.userObj.email= this.userDetail.value.email;
this.userObj.entreprise= this.userDetail.value.entreprise;
this.userObj.phone= this.userDetail.value.phone;
this.userObj.password='';
this.userObj.fullName='';
this.userObj.type=localStorage.getItem('userRole');
this.userService.updateUser(this.userObj).subscribe(res =>{
  console.log(res);
  localStorage.setItem('UserDetail',JSON.stringify(res));
  this.toastr.success('Sccess update', 'You have been  successfully update profil ');
  this.router.navigate(['/user-profile']);
},err =>{
  console.log(err);
})
  }
}
