import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {ServicesService} from '../../services/services.service';
import {User} from '../../models/user';
import {Service} from '../../models/service';
import {CommandeService} from '../../services/commande.service';
import {Commande} from '../../models/commande';

@Component({
  selector: 'app-hebergement',
  templateUrl: './hebergement.component.html',
  styleUrls: ['./hebergement.component.scss']
})
export class HebergementComponent implements OnInit {
  private servList: Service[];
  private a:number;
  private isLoggedIn: boolean=false;
  private commList: Commande[];


  constructor(public servicesService : ServicesService,private http:HttpClient , private commService : CommandeService) { }

  ngOnInit() {
    this.servicesService.getAllService().subscribe(data =>{
      this.servList =data;
      console.log(data);


  })}

  isUserLoggedIn() {
    if( (JSON.parse(localStorage.getItem('UserDetail'))) != null)
    {
      return this.isLoggedIn=true;
    }
  }

  getPrecommande(service: Service) {
    this.commService.getByServiceId(service.idService).subscribe(res =>{
      this.commList=res;
      console.log(service.idService);
      localStorage.setItem("idService",service.idService);

    },err=>{
      console.log("error while fetching data")
    });
  }
  getAllCommande(service:Service){
    this.commService.getByServiceId(service.idService).subscribe(res =>{
      this.commList=res;
      localStorage.setItem("services",JSON.stringify(res));
      console.log(JSON.parse(localStorage.getItem("services.0.idService")));
      localStorage.setItem("servicesid",localStorage.getItem("services.idService"))
    },err=>{
      console.log("error while fetching data")
    });
  }
}
