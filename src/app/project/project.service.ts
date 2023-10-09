import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http:HttpClient
  ) { }

  httpOptions:any;
  serviceUrl= environment.serviceFormUrl

  getToken(){
    var tokenKey=localStorage.getItem('app-token')
    
    if(tokenKey != null){

      var tokenData=JSON.parse(tokenKey)

      console.log("tokenKey ->")
      console.log(tokenData.token)
      // tokenData.token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTE0MjQ1MDYsImlkIjoiNTYiLCJvcmlnX2lhdCI6MTY3OTg4ODUwNiwicm9sZV9pZCI6IjEifQ.IO8j_VBCxTQ-fJbfhIyR5gG4B2PzXQrGV903mZiDyBc'
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

  add(name:string, description:string)
  {
    this.getToken();
    return this.http.post(this.serviceUrl+'create',{
      name:name,
      description:description
    }, this.httpOptions)
    
  }

  edit(id:number,name:string, description:string)
  {
    this.getToken();
    return this.http.put(this.serviceUrl+'update/'+id,{
      name:name,
      description:description
    }, this.httpOptions)
    
  }

  delete(id:number)
  {
    return this.http.delete(this.serviceUrl+'destroy/'+id, this.httpOptions);
  }
  
}
