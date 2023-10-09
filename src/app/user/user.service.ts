import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) {}

  httpOptions:any;
  serviceUserUrl = environment.serviceUserUrl
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
  

  add(company_name:string,phone:string,email:string,password:string)
  {
    this.getToken();
    return this.http.post(this.serviceUserUrl+'/register',{
      name:company_name,
      phone:phone,
      email:email,
      gender_id:1,
      date_of_birth:"",
      base_url:"https://dashboard.snap-in.co.id/",
      password:password
    }, this.httpOptions)
    
  }

  get(url:any){
    this.getToken();
    return this.http.get(this.serviceUrl+url, this.httpOptions);
  }

  getUser(id: string, url: any) {
    this.getToken();
    return this.http.get(this.serviceUrl + url + id, this.httpOptions);
  }

  getCompanyByUserID(id: string, url: any) {
    this.getToken();
    return this.http.get(this.serviceUrl + url + id, this.httpOptions);
  }

  deleteUser(id: number) {
    this.getToken();
    return this.http.delete(this.serviceUrl + "/user/delete/" + id, this.httpOptions);
  }

  blockUser(user_id:number)
  {
    this.getToken();
    return this.http.post(this.serviceUrl+'/user/block_user',{
      user_id:user_id,
      status:false
    }, this.httpOptions)
    
  }

  unblockUser(user_id:number)
  {
    this.getToken();
    return this.http.post(this.serviceUrl+'/user/block_user',{
      user_id:user_id,
      status:true
    }, this.httpOptions)
    
  }

  verifEmail(user_id:number)
  {
    this.getToken();
    return this.http.post(this.serviceUrl+'/user/verified_unverified_email',{
      user_id:user_id,
      is_email_verified:true
    }, this.httpOptions)
    
  }
  
  unverifEmail(user_id:number)
  {
    this.getToken();
    return this.http.post(this.serviceUrl+'/user/verified_unverified_email',{
      user_id:user_id,
      is_email_verified:false
    }, this.httpOptions)
    
  }

  verifPhone(user_id:number)
  {
    this.getToken();
    return this.http.post(this.serviceUrl+'/user/verified_unverified_phone',{
      user_id:user_id,
      is_phone_verified:true
    }, this.httpOptions)
    
  }
  
  unverifPhone(user_id:number)
  {
    this.getToken();
    return this.http.post(this.serviceUrl+'/user/verified_unverified_phone',{
      user_id:user_id,
      is_phone_verified:false
    }, this.httpOptions)
    
  }

  edit(name:string, email:string, phone:string, encrypt_code:string, id:number)
  {
    this.getToken();
    return this.http.put(this.serviceUrl+'/user/edit_user/'+id,{
      name:name,
      email:email,
      phone:phone,
      encrypt_code:encrypt_code
    }, this.httpOptions)
    
  }
}
