import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private userList: User[];
  private modalIsOpen: boolean = false;
  showModal: any;
  firstName : any ;
  key : string='id';
  reverse:boolean =false;
  p:number =1;

  constructor( public userService : UserService,private http:HttpClient ,  private toastr: ToastrService) { }

  ngOnInit() {
   this.userService.getAllUsers().subscribe(data =>{
     this.userList =data;
   })
  }

  showModalDialog() {
    this.modalIsOpen = true;
  }
  userModel= new User();
  onSubmit(data) {
   /* this.http.post('https://localhost:7086/api/Users/Register',data).subscribe((result) =>{
      console.log(result)
    });*/
    this.userService.addUsers(data).subscribe((result) =>{
      console.log(result);
      this.toastr.success('Sccess Add', 'You have been  successfully add a new user');
    });
    console.log(data);
  }

  deleteUser(user:User) {
 this.userService.deleteUser(user).subscribe(res =>{
   console.log(res);
   this.toastr.success('Sccess Deleted', 'You have been  successfully delete the  user');

   this.userService.getAllUsers().subscribe(data =>{
     this.userList =data;
   })
})
}
Search(){
    if (this.firstName ==""){
      this.ngOnInit();
    }else{
      this.userList=this.userList.filter(res =>
      {
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    }
}
sort(key){
    this.key=key;
    this.reverse=!this.reverse;
}
}

