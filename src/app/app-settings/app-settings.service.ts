import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  constructor(
    private http:HttpClient
    
  ) {}

  httpOptions:any;
  // serviceUrl= 'https://pengembangan.lakuin.id:4031'
  // serviceUrl= 'http://localhost:8090/'
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
  getByID(id: string, url: any) {
    this.getToken();
    return this.http.get(this.serviceUrl + url + id, this.httpOptions);
  }

  edit(app_type_id:number, name:string, code:string, value:string, id:number)
  {
    this.getToken();
    return this.http.put(this.serviceUrl+'/appSettings/edit/'+id,{
      app_type_id:app_type_id,
      name:name,
      code:code,
      value:value
    }, this.httpOptions)
    
  }
}
