import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';

// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  title = "Home";
  httpOptions: any;
  serviceUrl = environment;

  getToken() {
    var tokenKey = localStorage.getItem('app-token');

    console.log("get token---------");
    if (tokenKey != null) {
      var tokenData = JSON.parse(tokenKey);
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + tokenData.token
        })
      };
    }
  }

  get(url: any) {
    this.getToken();
    return this.http.get(this.serviceUrl + url, this.httpOptions);
  }


}
