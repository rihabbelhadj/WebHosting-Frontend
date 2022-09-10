import { Component, OnInit } from '@angular/core';
import {CommandeService} from '../../services/commande.service';
import {User} from '../../models/user';
import {Commande} from '../../models/commande';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {
  private commList: Commande[];
  p: number=1;
  e: string;

  constructor(public commService:CommandeService , public userService :UserService) { }

  ngOnInit() {
    this.commService.getAllCommande().subscribe(data =>{
      this.commList=data;


      console.log(data);
    })
  }


}
