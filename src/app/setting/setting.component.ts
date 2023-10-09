import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {

  constructor(
    private router : Router
  ){}


  logout(){
    // localStorage.setItem('app-token', '');
    localStorage.clear();

    //redirect ke home
    this.router.navigate(['login'])
  }
}
