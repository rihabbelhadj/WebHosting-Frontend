import { Component, OnInit } from '@angular/core';
import {DomaineService} from '../../services/domaine.service';
import {Domaine} from '../../models/domaine';
import {Serveur} from '../../models/serveur';
import {CommandeService} from '../../services/commande.service';

@Component({
  selector: 'app-precommande',
  templateUrl: './precommande.component.html',
  styleUrls: ['./precommande.component.scss']
})
export class PrecommandeComponent implements OnInit {
  domainobj: Domaine = new Domaine();
 domaines : Domaine[] =[];
 dom:string;
 private verif:boolean;
  flexRadioDefault: any;
  constructor(private domainService :DomaineService, private commService:CommandeService) { }

  ngOnInit() {
  }

  sendData(event: any) {
    let query:string=event.target.value;
    this.domainService.searchDomaine(query.trim()).subscribe(results =>{

      console.log(results);

    })
  }

  searchDomaine(value: string) {

   this.domainService.searchDomaine(value).subscribe((results)=>{
     console.log(results)
     this.verif=true;
     this.domaines=results;
     localStorage.setItem("object",JSON.stringify(results));
     this.dom=JSON.parse(localStorage.getItem("object"));

   })
  }

  postDomaine(value: string) {
    this.domainobj.domainName= value;
    this.domainobj.dateCreation=new Date();
    this.domainobj.root=value;
    this.domainobj.idDeBase=localStorage.getItem('userId');
    this.domainobj.hebergementType='string';
    this.domainobj.user=JSON.parse(localStorage.getItem('UserDetail'));

    this.domainService.postDomaine(this.domainobj).subscribe(rest=>{
      console.log(rest);
    })
   // this.commService.AddCommande(thi)


  }

  getDomaine(domain: Domaine) {
    console.log(domain.idDomain)
    localStorage.setItem('idDomaineCom',domain.idDomain);
    localStorage.setItem('Domainename',domain.domainName);
    localStorage.setItem('Domainetype',domain.hebergementType);

  }
}
