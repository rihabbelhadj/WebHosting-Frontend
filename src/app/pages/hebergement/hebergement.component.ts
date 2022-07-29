import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {ServicesService} from '../../services/services.service';
import {User} from '../../models/user';
import {Service} from '../../models/service';

@Component({
  selector: 'app-hebergement',
  templateUrl: './hebergement.component.html',
  styleUrls: ['./hebergement.component.scss']
})
export class HebergementComponent implements OnInit {
  private servList: Service[];
  constructor(public servicesService : ServicesService,private http:HttpClient ) { }

  ngOnInit() {
    this.servicesService.getAllService().subscribe(data =>{
      this.servList =data;
  })}

}
