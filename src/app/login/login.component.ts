import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private service : LoginService,
    private router : Router
  ){
    // this.getStaticData();
    
  }

  //form validation
  email = new FormControl('', [Validators.required, Validators.email]);
  password=new FormControl('',[Validators.minLength(6), Validators.required]);

  dataGenders:any
  title = 'Register Account'

  //inisial untuk data formulir
  user:any={};

  ngOnInit(): void{
    this.getDataGenders();
    this.getDataG();
  }

  getDataG(){
    return this.service.get('/genders').subscribe(res=>{
      console.log("res new get")
      console.log(res)
    })
  }

  getDataGenders(){
    return this.service.getDataGenders().forEach(
      (response: any) => {
        console.log("map")
        console.log(response.data)
        this.dataGenders = response.data
        // return response.data.map(
        //   data => {
        //     return new CityModel(
        //       data.id,
        //       data.name,
        //     );
        //   }
        // );
      }
    );
  }

  books:any
  getStaticData(){
    this.books=[
        {
          id : 1,
          title : 'Belajar angular 1',
          author : 'Kyky'
        },
        {
          id : 2,
          title : 'Belajar angular 2',
          author : 'Aydan'
        },
        {
          id : 3,
          title : 'Belajar angular 3',
          author : 'Ibrahim'
        },
        {
          id : 4,
          title : 'Belajar angular 4',
          author : 'Faqih'
        },
        {
          id : 5,
          title : 'Belajar angular 5',
          author : 'Jojo'
        }
    ];

    console.log(this.books)
  }

  register(user:any){

    console.log(user)
    this.service.register(user.name, user.email, user.phone, user.password).subscribe(res=>{
      // this.loading=false;
      alert('Registrasi berhasil');
      this.router.navigate(['login']);
    },err=>{
      // this.loading=false;
      console.log(err)
      alert('Ada masalah..');
    });
  }

  login(user:any){
    this.service.login(user.email, user.password).subscribe(res=>{
      localStorage.setItem('app-token', JSON.stringify(res));
      this.router.navigate(['home'])
    }, err=>{
      alert('Ada masalah..');
    });
  }

  
}
