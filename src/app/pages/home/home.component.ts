import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavbarComponent } from './../../components/navbar/navbar.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service';
import {HttpClient} from '@angular/common/http';
import {DomaineService} from '../../services/domaine.service';
import {User} from '../../models/user';
import {Domaine} from '../../models/domaine';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  domaineList: Domaine[];
  @ViewChild(NavbarComponent, { static: false }) navbar: NavbarComponent;
  domain: Domaine[];

  constructor(private auth: AuthenticationService, private router: Router, public domaineService : DomaineService,private http:HttpClient) { }

  ngOnInit() {
  }

  isAuthentificated() {
    return this.auth.isAuthentificated();
  }
  OnDeconnexion() {
    console.log("Deconnexion");
    this.auth.logOut();
    this.router.navigateByUrl('/index');

  }

  searchdomaines(value: string) {
    this.domaineService.getAllDomaines().subscribe(data =>{
      this.domaineList =data;
    })
  }
}
