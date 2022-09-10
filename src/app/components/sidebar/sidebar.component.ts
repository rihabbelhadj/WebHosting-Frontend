import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
isClient:boolean;
isAdmin:boolean;
  constructor() { }

  ngOnInit() {
  }

  chekoutClient(){
    if( (localStorage.getItem('userRole')) === 'client')
    {
      return this.isClient=true;
    }

  }
  chekoutAdmin(){
   if ( localStorage.getItem('userRole') === 'admin')
    {
      return this.isAdmin = true;
    }
  // else return this.
  }

  toggle() {

  }
}
