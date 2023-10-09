import { Component } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { Router } from '@angular/router';
import { AppSettingsService } from '../app-settings/app-settings.service';

@Component({
  selector: 'app-app-settings-edit',
  templateUrl: './app-settings-edit.component.html',
  styleUrls: ['./app-settings-edit.component.css']
})
export class AppSettingsEditComponent {
  appSettings: any;
  dataList: any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private appSettingsService: AppSettingsService
  ){
    this.getDetailAppSettings();
    this.getListAppTypes();
  }

  title='Edit App Settings';
  appSettingsValue:any={};

  edit(postData:any){
    this.appSettingsService.edit(postData[0].app_type_id, postData[0].name, postData[0].code, postData[0].value, postData[0].id).subscribe(res=>{
      // console.log(postData[0].name)
      // alert('Success: Data has save');
      // window.location.reload();
      this.router.navigate(['app_settings']);
    },err=>{
      // this.loading=false;
      console.log(err)
      // window.location.reload();
      alert('Failed: data is not saved');
    });
  }

  getDetailAppSettings(){
  const id = this.route.snapshot.paramMap.get('id');
  const url = '/appSettings/';
    if (id !== null) {
      this.appSettingsService.getByID(id, url).subscribe((data: any) => {
        this.appSettings = data.data;
      });
    } else {
      this.appSettings = null;
    }
  }

  getListAppTypes() {
    return this.appSettingsService.get('/get_app_types').forEach(
      (response: any) => {
        console.log(response.data)
        this.dataList = response.data
      }
    );
  }
  
}
