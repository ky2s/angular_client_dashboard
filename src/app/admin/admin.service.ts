import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http:HttpClient
  ) { }

  httpOptions:any;
  serviceUrl = environment.serviceInternalUrl

  getToken(){

    var tokenKey=localStorage.getItem('app-token')
    
    if(tokenKey != null){

      var tokenData=JSON.parse(tokenKey)

      console.log(tokenData.token)

      this.httpOptions={
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization': 'Bearer '+tokenData.token
        })
      }
    }
  }

  get(url:any){
    this.getToken();
    return this.http.get(this.serviceUrl+url, this.httpOptions);
  }
}
