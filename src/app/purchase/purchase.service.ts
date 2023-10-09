import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  selectedFile: File | null = null; // Deklarasi properti selectedFile

  constructor(
    private http: HttpClient
  ) { }
  
  httpOptions: any;
  serviceUrl = environment.serviceInternalUrl;

  getToken() {
    var tokenKey = localStorage.getItem('app-token');

    if (tokenKey != null) {
      var tokenData = JSON.parse(tokenKey);
      console.log(tokenData.token);

      this.httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + tokenData.token
        })
      };
    }
  }

  add(formDataV: FormData) {
    this.getToken();
    
    return this.http.post(this.serviceUrl + '/subscription/add_quota', formDataV, this.httpOptions);
  }

  get(url: any) {
    this.getToken();
    return this.http.get(this.serviceUrl + url, this.httpOptions);
  }

  getCompanyList(url: any) {
    this.getToken();
    return this.http.get(this.serviceUrl + url, this.httpOptions);
  }
}
