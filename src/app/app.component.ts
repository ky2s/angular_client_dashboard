import { Component,OnInit ,isDevMode  } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
// import { Environment } from '/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    public router:Router
  ){}

  ngOnInit():void{
    if (isDevMode()) {
      
      console.log('Development!-------------->');
      console.log(environment.apiKey);
      console.log(environment.serviceInternalUrl);
    } else {
      console.log('Production!--------------->');
      console.log(environment.apiKey);
      console.log(environment.serviceInternalUrl);

    }

    this.checkLogin();
  }
  title = 'Login Snapin';

  checkLogin()
  {
    var getToken = localStorage.getItem('app-token');
    if (getToken == null)
    {
      this.router.navigate(['/login']);
    }
  }

  logout()
  {
    let conf=confirm("Kamu yakin akan keluar aplikasi?");
    if (conf)
    {
      localStorage.removeItem('app-token');
      window.location.reload()
    }
  }
}
