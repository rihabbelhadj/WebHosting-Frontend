import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Serveur} from '../../models/serveur';
import {ServeurService} from '../../services/serveur.service';
import {ToastrService} from 'ngx-toastr';
import {ServicesService} from '../../services/services.service';
import {Service} from '../../models/service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  servDetail !: FormGroup;
  servobj: Service = new Service();
  servList :Service[] =[];
  constructor(private formBuilder: FormBuilder, private servService:ServicesService , private toastr :ToastrService) { }

  ngOnInit() {
    this.getAllService();
    this.servDetail =this.formBuilder.group({
      idService:[''],
      ServiceName :[''],
      type:[''],
      prix:[''],
      espaceDisque:[''],
      bandePassante:[''],
      trafic:[''],
      nbmail:['']
    });
  }

  addService() {
    console.log(this.servDetail);
    this.servobj.serviceName= this.servDetail.value.ServiceName;
    this.servobj.espaceDisque=this.servDetail.value.espaceDisque;
    this.servobj.nbEmail=this.servDetail.value.nbEmail;
    this.servobj.prix=this.servDetail.value.prix;
    this.servobj.traficMesuel=this.servDetail.value.traficMesuel;
    this.servobj.bandePassante=this.servDetail.value.bandePassante;
    this.servobj.typeHebergement=this.servDetail.value.type;
    this.servService.addService(this.servobj).subscribe(res =>{
      console.log(res);
      this.getAllService();
    },err =>{
      console.log(err);
    })
  }
  getAllService(){
    this.servService.getAllService().subscribe(res =>{
      this.servList=res;
    },err=>{
      console.log("error while fetching data")
    });
  }

  /*deleteServeur(serv:Serveur) {
    this.servService.deleteService(serv).subscribe(res =>{
      console.log(res);
      this.toastr.success('Sccess Delete', 'You have been  successfully delete the serveur ');
      this.getAllService();
    },err =>{
      console.log(err);
    } )
  }*/


  updateService() {
    this.servobj.idService = (this.servDetail.value.idService);
    this.servobj.serviceName=this.servDetail.value.ServiceName;
    this.servobj.traficMesuel=this.servDetail.value.trafic;
    this.servobj.prix=this.servDetail.value.prix;
    this.servobj.espaceDisque=this.servDetail.value.espaceDisque;
    this.servobj.typeHebergement=this.servDetail.value.type;
    this.servobj.bandePassante=this.servDetail.value.bandePassante;
    this.servobj.nbEmail=this.servDetail.value.nbEmail;
    this.servService.updateService(this.servobj).subscribe(res =>{
      this.getAllService();
      console.log(res);

    },err=>{
      console.log(err);
    })
  }


  deleteService(serv: Service) {
    this.servService.deleteService(serv).subscribe(res =>{
      console.log(res);
      this.toastr.success('Sccess Delete', 'You have been  successfully delete the service ');
      this.getAllService();
    },err =>{
      console.log(err);
    } )

  }


  editService(service: Service) {
    console.log("aa"+service.idService);
    this.servDetail.controls['idService'].setValue(service.idService);
    this.servDetail.controls['ServiceName'].setValue(service.serviceName);
    this.servDetail.controls['prix'].setValue(service.prix);
    this.servDetail.controls['type'].setValue(service.typeHebergement);
    this.servDetail.controls['espaceDisque'].setValue(service.espaceDisque);
    this.servDetail.controls['bandePassante'].setValue(service.bandePassante);
    this.servDetail.controls['trafic'].setValue(service.traficMesuel);
    this.servDetail.controls['nbmail'].setValue(service.nbEmail);
  }
}
