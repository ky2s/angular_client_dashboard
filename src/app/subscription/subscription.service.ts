import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(
    private http:HttpClient) { }

  httpOptions:any;
  serviceUrl= 'http://localhost:8090/'

  getToken(){
    var tokenKey=localStorage.getItem('app-token')
    
    if(tokenKey != null){

      var tokenData=JSON.parse(tokenKey)

      console.log("tokenKey ->")
      console.log(tokenData.token)

      this.httpOptions={
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization': 'Bearer '+tokenData.token
        })
      }
    }
  }

  get(url:any)
  {
    this.getToken();
    return this.http.get(this.serviceUrl+url, this.httpOptions);
  }
}
