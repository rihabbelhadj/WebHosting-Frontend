import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private toggleButton: any;
  private sidebarVisible: boolean;
  private userName: string;
  private password: string;
  private loginStatus: string;
  loggedUser: User;
  isLoggedIn = false;

  constructor(private auth:AuthenticationService,private router:Router) {
      this.sidebarVisible = false;
  }

  ngOnInit() {

  }
  /*isUserLoggedIn() {
    const user = JSON.parse(<string> localStorage.getItem('user'));
    if (user) {
      this.auth.setLoggedUser(user);
      this.loggedUser = user;
      this.isLoggedIn = true;

    }


  }*/
  isUserLoggedIn(){
    if( (JSON.parse(localStorage.getItem('UserDetail'))) != null)
    {
      return this.isLoggedIn=true;
    }}
  sidebarToggle() {

  }

  isDocumentation() {

  }

  /*isAuthentificated()
  {
    this.auth.login(this.userName, this.password).subscribe((data)=>{
      this.loginStatus = status;
      console.log('response', data);
    });
  }*/
  OnDeconnexion() {
    console.log("Deconnexion");
    this.auth.logOut();
    this.router.navigateByUrl('/index');

  }
}
