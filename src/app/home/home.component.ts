
import { Component, ViewChild } from "@angular/core";
import { Router } from '@angular/router';
import { AdminService } from '../admin/admin.service';
import { LoginService } from '../login/login.service';
// import { HomeComponent } from './home/home.component';
// import { HomeService } from './home.service';

// import { ApexCharts } from 'apexcharts'
// import { ApexCharts } from 'apexcharts/types'

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import { HomeService } from "./home.service";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title ='Dashboard'
  dataList:any
  dataBigNumber:any

  // @ViewChild("chart") chart: ChartComponent;
  // public chartOptions: Partial<ChartOptions>;


  constructor(
    private service : HomeService,
    private router : Router,
    private admin : AdminService

  ){
    this.getDataList();
    console.log("siasik.....")
    // this.admin.getToken();
    this.getDataBigNumber();
    

    // this.chartOptions = {
    //   series: [
    //     {
    //       name: "Desktops",
    //       data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    //     }
    //   ],
    //   chart: {
    //     height: 350,
    //     type: "line",
    //     zoom: {
    //       enabled: false
    //     }
    //   },
    //   dataLabels: {
    //     enabled: false
    //   },
    //   stroke: {
    //     curve: "straight"
    //   },
    //   title: {
    //     text: "Product Trends by Month",
    //     align: "left"
    //   },
    //   grid: {
    //     row: {
    //       colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
    //       opacity: 0.5
    //     }
    //   },
    //   xaxis: {
    //     categories: [
    //       "Jan",
    //       "Feb",
    //       "Mar",
    //       "Apr",
    //       "May",
    //       "Jun",
    //       "Jul",
    //       "Aug",
    //       "Sep"
    //     ]
    //   }
    // };
    
  }
  
  getDataList(){

    return this.service.get('/user/get_list_user').forEach(
      (response: any) => {
        console.log(response.data)
        this.dataList = response.data
      }
    );
  }

  getDataBigNumber() {
    return this.service.get('/dashboard/get_total').forEach(
      (response: any) => {
        console.log(response.data)
        this.dataBigNumber = response.data
      }
    );
  }

}
