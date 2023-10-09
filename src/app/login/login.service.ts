import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

    constructor(
      private httpClient:HttpClient,
      private http:HttpClient,
      private router:Router,
    ) {

      // cek tokej jika sudah ada then redirect /home
      // this.getToken()
     }

    httpOption: any
    serviceUserUrl = environment.serviceInternalUrl
    
    getDataGenders(){
      return this.httpClient.get(this.serviceUserUrl, this.httpOption)
    }

    get(url:any){
      return this.http.get(this.serviceUserUrl+url)
    }

    register(name:string,email:string,phone:string, password:string){

      console.log("service go ---------------");
      console.log(password);
      // return false;
      return this.http.post(this.serviceUserUrl+'/register',{
        name:name,
        email:email,
        phone:phone,
        gender_id:1,
        date_of_birth:"1992-10-19",
        password:password,
        base_url:"https://dashboard.snap-in.co.id/",
      })
    }

    login(email:string, password:string){
      return this.http.post(this.serviceUserUrl+'/login', {
        email:email, 
        password:password
      })
    }
}
