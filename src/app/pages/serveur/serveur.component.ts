import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl} from '@angular/forms';
import {Serveur} from '../../models/serveur';
import {ServeurService} from '../../services/serveur.service';
import {isInteger} from '@ng-bootstrap/ng-bootstrap/util/util';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-serveur',
  templateUrl: './serveur.component.html',
  styleUrls: ['./serveur.component.scss']
})
export class ServeurComponent implements OnInit {
servDetail !: FormGroup;
servobj: Serveur = new Serveur();
servList :Serveur[] =[];
  constructor(private formBuilder: FormBuilder, private servService:ServeurService , private toastr :ToastrService) { }

  ngOnInit() {
  this.getAllServeur();
    this.servDetail =this.formBuilder.group({
      idServeur:[''],
      plateformeType :[''],
      hostName:[''],
      prix:[''],
      nbAutorise:['']
    });
  }

  addServeur() {
    console.log(this.servDetail);
    this.servobj.idServeur = this.servDetail.value.idServeur;
    this.servobj.hostName=this.servDetail.value.hostName;
    this.servobj.plateformeType=this.servDetail.value.plateformeType;
    this.servobj.prix=this.servDetail.value.prix;
    this.servobj.nbAutorise=this.servDetail.value.nbAutorise;
    this.servService.addServeur(this.servobj).subscribe(res =>{
      console.log(res);
      this.getAllServeur();
    },err =>{
      console.log(err);
    })
  }
  getAllServeur(){
this.servService.getAllServeur().subscribe(res =>{
  this.servList=res;
},err=>{
  console.log("error while fetching data")
});
  }

  deleteServeur(serv:Serveur) {
this.servService.deleteServeur(serv).subscribe(res =>{
  console.log(res);
  this.toastr.success('Sccess Delete', 'You have been  successfully delete the serveur ');
  this.getAllServeur();
},err =>{
  console.log(err);
} )
  }

  editServeur(servobj:Serveur) {
    console.log("aa"+servobj.idServeur);
    this.servDetail.controls['idServeur'].setValue(servobj.idServeur);
this.servDetail.controls['plateformeType'].setValue(servobj.plateformeType);
this.servDetail.controls['prix'].setValue(servobj.prix);
this.servDetail.controls['hostName'].setValue(servobj.hostName);
this.servDetail.controls['nbAutorise'].setValue(servobj.nbAutorise);


  }

  updateServeur() {
this.servobj.idServeur = (this.servDetail.value.idServeur);
    this.servobj.hostName=this.servDetail.value.hostName;
    this.servobj.plateformeType=this.servDetail.value.plateformeType;
    this.servobj.prix=this.servDetail.value.prix;
    this.servobj.nbAutorise=this.servDetail.value.nbAutorise;
    this.servService.updateServeur(this.servobj).subscribe(res =>{
      console.log(res);
      this.getAllServeur();
    },err=>{
      console.log(err);
    })
  }
}
