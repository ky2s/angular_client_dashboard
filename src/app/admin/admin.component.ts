import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  title = 'User Admins'
  dataList:any
  dataListLog:any

  constructor(
    private service : AdminService,
    private router : Router
  ){
    this.getDataList();
    this.getDataListLog();
    
  }
  
  
  getDataList(){

    return this.service.get('/admin/get_list_admin').forEach(
      (response: any) => {
        console.log(response.data)
        this.dataList = response.data
      }
    );
  }

  getDataListLog(){

    return this.service.get('/logadmin/log_admin').forEach(
      (response: any) => {
        console.log(response.data)
        this.dataListLog = response.data
      }
    );
  }
}
