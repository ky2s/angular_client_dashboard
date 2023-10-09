import { Component } from '@angular/core';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(
    private adminService : AdminService
  ) {
    this.getProfile();
  }

  title= "User Clients"
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
