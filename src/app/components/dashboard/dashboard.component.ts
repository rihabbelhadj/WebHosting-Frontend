import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/Chart.js';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {ServeurService} from '../../services/serveur.service';
import {Serveur} from '../../models/serveur';
import {ServicesService} from '../../services/services.service';
import {Service} from '../../models/service';
export interface BarChartDataset {
  data: number[];
  label: string;
  type?: string;
  borderWidth?: number;
  yAxisID?: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss', '../../../assets/css/bootstrap-icons.css', '../../../assets/css/style.css', '../../../assets/css/main.css','../../../assets/css/main.min.css',]

})
export class DashboardComponent implements OnInit {
  servList :Serveur[] =[];
  serviList :Service[] =[];
  private isAdmin: boolean;
  private isClient: boolean;
  private userList: User[];
  public chartOptions: any;
  public chartType: string = 'line';
  public chartLabels: string[] = ['Jul 14', 'Jul 15', 'Jul 16', 'Jul 17'];
  public chartData: BarChartDataset[] =
    [
      {
        data: [44000, 37000, 35000, 42000],
        label: 'Repeat Count',
        borderWidth: 1
      },
      {
        data: [5000, 5000, 5000, 6000],
        label: 'New Count',
        borderWidth: 1
      },
    ];
  private totalRecords: number;
  private totalserv: number;
  private totalService: number;

  constructor(public userService : UserService , private servService:ServeurService , public servicesService : ServicesService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data =>{
      this.userList =data;
      this.totalRecords = this.userList.length;
      //console.log('length:'+this.totalRecords)
    })
    this.servService.getAllServeur().subscribe(res =>{
      this.servList=res;
      this.totalserv=this.servList.length;

    });

    this.servicesService.getAllService().subscribe(data =>{
      this.serviList =data;
      this.totalService=this.serviList.length;
    })
  }

  chekoutAdmin() {
    if ( (localStorage.getItem('userRole')) === 'admin')
    {

      return this.isAdmin = true;
    }
  }
  chekoutClient(){
    if( (localStorage.getItem('userRole')) === 'client')
    {
      return this.isClient=true;
    }

  }
}
