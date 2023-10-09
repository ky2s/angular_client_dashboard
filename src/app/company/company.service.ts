import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

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

  getCompanyAdmin(id: string, url: any) {
    this.getToken();
    return this.http.get(this.serviceUrl + url + id, this.httpOptions);
  }
  getCompanyOwned(id: string, url: any) {
    this.getToken();
    return this.http.get(this.serviceUrl + url + id, this.httpOptions);
  }
  getDetailCompany(id: string, url: any) {
    this.getToken();
    return this.http.get(this.serviceUrl + url + id, this.httpOptions);
  }

  getDataCompanyFormList(id: string, url: any) {
    this.getToken();
    return this.http.get(this.serviceUrl + url + id, this.httpOptions);
  }

  getTopupHistoryByIdOrganization(url: any, id: any ) {
    this.getToken();
    return this.http.get(this.serviceUrl + url + id, this.httpOptions);
  }

  getDataCompanyFormAttendanceDetail(url: any, id: any ) {
    this.getToken();
    return this.http.get(this.serviceUrl + url + id, this.httpOptions);
  }

  getAttendance(id: any, url: any) {
    this.getToken();
    return this.http.get(this.serviceUrl + url + id, this.httpOptions);
  }



  getAttendanceList(id: any, url: any) {
    this.getToken();
    return this.http.get(this.serviceUrl + url + id, this.httpOptions);
  }

  getTeam(id: any, url: any) {
    this.getToken();
    return this.http.get(this.serviceUrl + url + id, this.httpOptions);
  }


  

  block(organization_id:number)
  {
    this.getToken();
    return this.http.post(this.serviceUrl+'/company/block_company',{
      organization_id:organization_id,
      status:false
    }, this.httpOptions)
    
  }

  unblock(organization_id:number)
  {
    this.getToken();
    return this.http.post(this.serviceUrl+'/company/block_company',{
      organization_id:organization_id,
      status:true
    }, this.httpOptions)
    
  }

  deleteCompany(organization_id:any)
  {
    this.getToken();
    return this.http.delete(this.serviceUrl+'/company/delete/'+organization_id, this.httpOptions)
  }

  edit(attendance_in:string, attendance_out:string, id:number)
  {
    this.getToken();
    return this.http.put(this.serviceUrl+'/user/edit_attendance/'+id,{
      attendance_in:attendance_in,
      attendance_out:attendance_out,
    }, this.httpOptions)
    
  }



  delete(id:number, type_check_int:number)
  {
    this.getToken();
    return this.http.post(this.serviceUrl+'/user/destroy_attendance',{
      id:id,
      type_check_int:type_check_int
    }, this.httpOptions)
    
  }
  
}
