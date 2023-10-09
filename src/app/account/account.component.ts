import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  constructor(
    private http:HttpClient,
    private adminService : AdminService
  ) {
    this.getProfile();
  }

  title="User Admin"
  httpOptions:any;
  serviceUrl = environment.serviceInternalUrl
  dataProfile:any

  getProfile(){

    return this.adminService.get('/admin/profile').forEach(
      (response: any) => {
        console.log('response.data------------------')
        this.dataProfile = response.data
      }
    );
  }
}
