import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  title ='User List'
  dataList:any
  user:any

  subject = 'Hello from snap-in';
  body = 'This is a test email sent from an snap-in application.';
  
  constructor(
    private service : UserService,
    private router : Router
  ){
    this.getDataList();
    
  }
  
  add(user:any){

    if(confirm("Are you sure want to register this new company?")) {
        this.service.add(user.name, user.phone, user.email, user.password).subscribe(res=>{
          
        alert('Success: Purchase has added to Company Account');
        window.location.reload();
        this.router.navigate(['purchase']);
        
      },err=>{
        // this.loading=false;
        console.log(err)
        window.location.reload();
        alert('Failed: data is not saved');
      });
    }
  }

  getDataList(){

    return this.service.get('/user/get_list_user').forEach(
      (response: any) => {
        console.log(response.data)
        this.dataList = response.data
      }
    );
  }

  blockUser(id:any){
    // alert(id)
    this.service.blockUser(id).subscribe(res=>{

      // alert('Success: Data has save');
      window.location.reload();
      this.router.navigate(['user']);
    },err=>{
      // this.loading=false;
      console.log(err)
      alert('Failed: data is not saved');
    });
  }

  unblockUser(id:any){
    // alert(id)
    this.service.unblockUser(id).subscribe(res=>{

      // alert('Success: Data has save');
      window.location.reload();
      this.router.navigate(['user']);
    },err=>{
      // this.loading=false;
      console.log(err)
      alert('Failed: data is not saved');
    });
  }

  verifEmail(id:any){
    // alert(id)
    this.service.verifEmail(id).subscribe(res=>{

      // alert('Success: Data has save');
      window.location.reload();
      this.router.navigate(['user']);
    },err=>{
      // this.loading=false;
      console.log(err)
      alert('Failed: data is not saved');
    });
  }

  unverifEmail(id:any){
    // alert(id)
    this.service.unverifEmail(id).subscribe(res=>{

      // alert('Success: Data has save');
      window.location.reload();
      this.router.navigate(['user']);
    },err=>{
      // this.loading=false;
      console.log(err)
      alert('Failed: data is not saved');
    });
  }

  verifPhone(id:any){
    // alert(id)
    this.service.verifPhone(id).subscribe(res=>{

      // alert('Success: Data has save');
      window.location.reload();
      this.router.navigate(['user']);
    },err=>{
      // this.loading=false;
      console.log(err)
      alert('Failed: data is not saved');
    });
  }

  unverifPhone(id:any){
    // alert(id)
    this.service.unverifPhone(id).subscribe(res=>{

      // alert('Success: Data has save');
      window.location.reload();
      this.router.navigate(['user']);
    },err=>{
      // this.loading=false;
      console.log(err)
      alert('Failed: data is not saved');
    });
  }

  openWhatsApp(phone:any) {
    const url = `https://wa.me/`+phone;
    window.open(url, '_blank');
  }


 
  openGmail(emailAddress:any) {
    const url = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(emailAddress)}&su=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.body)}`;
    window.open(url, '_blank');
  }
}
