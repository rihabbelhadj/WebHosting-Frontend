import { Component, OnInit } from '@angular/core';
import {CommandeService} from '../../services/commande.service';
import {Commande} from '../../models/commande';
import {Service} from '../../models/service';
import {Domaine} from '../../models/domaine';
import {Payement} from '../../models/payement';
import {PayementService} from '../../services/payement.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-type-facturation',
  templateUrl: './type-facturation.component.html',
  styleUrls: ['./type-facturation.component.scss']
})
export class TypeFacturationComponent implements OnInit {
  public servList: Commande[];
  i: number=0;

  constructor(private commService:CommandeService ,private  payService:PayementService , private router: Router) { }

  ngOnInit() {
    this.getAllCommande();
  }
  getAllCommande(){
    this.commService.getByServiceId(localStorage.getItem("idService")).subscribe(res =>{
      this.servList=res;
      localStorage.setItem("services",JSON.stringify(res));

    },err=>{
      console.log("error while fetching data")
    });
  }

  /*addCommande(serv:Service) {
    const com = new Commande();
    const domm=new Domaine();
    const servic= new Service();
    com.idService=serv.idService;
   com.idDomaine=localStorage.getItem('idDomaineCom');
    com.isValid =false;
    com.prix=serv.prix;
    com.tVA='25%';
    com.nbAnnee=2;
    domm.domainName=localStorage.getItem('Domainename');
    domm.hebergementType=localStorage.getItem('Domainetype');
    domm.user=JSON.parse(localStorage.getItem('UserDetail'));
    com.dom=domm;
   console.log(serv.serviceName)
    servic.serviceName=serv.serviceName;
    servic.espaceDisque=serv.espaceDisque;
    com.serv=servic;
    console.log(com);
this.commService.AddCommande(com).subscribe(result =>{
  console.log(result);
})



  }*/
  addCommande(serv:Commande){
  const  pay =new Payement();
    pay.date= new Date();
    pay.status=0;
    pay.type="inconnu";
    pay.idUser=localStorage.getItem('id');
    pay.user=JSON.parse(localStorage.getItem('UserDetail'));
    this.payService.AddPayement(pay).subscribe(res=>
    console.log(res));
    this.router.navigate(['/payement']);



  }
}
