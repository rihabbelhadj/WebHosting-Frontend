import { Component, OnInit } from '@angular/core';
import {DomaineService} from '../../services/domaine.service';
import {Domaine} from '../../models/domaine';

@Component({
  selector: 'app-precommande',
  templateUrl: './precommande.component.html',
  styleUrls: ['./precommande.component.scss']
})
export class PrecommandeComponent implements OnInit {
 domaines : Domaine[] =[];
 dom:string;
  constructor(private domainService :DomaineService) { }

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
     this.domaines=results;
     localStorage.setItem("object",JSON.stringify(results));
     this.dom=JSON.parse(localStorage.getItem("object"));

   })
  }
}
