import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettingsService } from './app-settings.service';

@Component({
  selector: 'app-app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: ['./app-settings.component.css']
})
export class AppSettingsComponent {
  title = 'Company List'
  dataList: any
  
constructor(
    // private modalService: NgbModal,
    private service: AppSettingsService,
    private router: Router
  ) {
    this.getAppSettingsList();
  }

  getAppSettingsList() {
    return this.service.get('/appSettings/').forEach(
      (response: any) => {
        console.log(response.data)
        this.dataList = response.data
      }
    );
  }
}
