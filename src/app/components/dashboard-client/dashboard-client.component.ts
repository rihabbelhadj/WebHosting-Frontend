import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {ServeurService} from '../../services/serveur.service';
import {ServicesService} from '../../services/services.service';
import {DomaineService} from '../../services/domaine.service';
import {Domaine} from '../../models/domaine';
import {PayementService} from '../../services/payement.service';
import {Payement} from '../../models/payement';

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.scss']
})
export class DashboardClientComponent implements OnInit {
  private userList: Domaine[];
  private payementList:Payement[];
  private totalRecords: number;
  private totalPayement :number;

  constructor(public userService : UserService,private payementService:PayementService,private domainDService: DomaineService , private servService:ServeurService , public servicesService : ServicesService) { }

  ngOnInit() {
    var id =localStorage.getItem('id');
    this.domainDService.getDomaineByUserId(id).subscribe(data =>{
      this.userList =data;
      this.totalRecords = this.userList.length;
      console.log('length:'+this.totalRecords)
    })

    this.payementService.getPayementByUserId(id).subscribe(data =>{
      this.payementList =data;
      console.log(data);
      console.log(this.payementList.length)
      this.totalPayement=this.payementList.length;
      console.log( this.totalPayement);
    })

    this.domainDService
  }

}
