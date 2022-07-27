import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/Chart.js';
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
  private isAdmin: boolean;
  private isClient: boolean;
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

  constructor() { }

  ngOnInit() {
  /*  const canvas = document.getElementById('myChart') as HTMLCanvasElement | null;
  if (canvas != null){
    const ctx = canvas.getContext('2d');
    console.log(ctx);
  }

    const ctx = canvas.getContext('2d');
   // var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart("ctx", {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });*/
  }

  chekoutAdmin() {
    if ( (JSON.parse(localStorage.getItem('userRole'))) === 'admin')
    {
      return this.isAdmin = true;
    }
  }
  chekoutClient(){
    if( (JSON.parse(localStorage.getItem('userRole'))) === 'client')
    {
      return this.isClient=true;
    }

  }
}
