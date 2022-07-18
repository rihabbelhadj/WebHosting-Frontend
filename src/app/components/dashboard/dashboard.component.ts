import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss', '../../../assets/css/bootstrap-icons.css', '../../../assets/css/style.css']
})
export class DashboardComponent implements OnInit {
  private isAdmin: boolean;
  private isClient: boolean;

  constructor() { }

  ngOnInit() {
  }

  chekoutAdmin() {
    if ( (JSON.parse(localStorage.getItem('userRole'))) === 'admin')
    {
      return this.isAdmin = true;
    }
  }
  chekoutClient(){
    if( (JSON.parse(localStorage.getItem('userRole'))) === 'client')
    {
      return this.isClient=true;
    }

  }
}
