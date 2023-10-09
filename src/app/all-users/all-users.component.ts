import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
// import Swal from 'sweetalert2';
// import {Swal} from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  title ='All Users'
  dataList:any

  subject = 'Hello from snap-in';
  body = 'This is a test email sent from an snap-in application.';


  constructor(
    private service : UserService,
    private router : Router

  ){
    this.getDataList();
    
  }

  getDataList(){

    return this.service.get('/user/get_all_user').forEach(
      (response: any) => {
        console.log(response.data)
        this.dataList = response.data
      }
    );
  }

  deleteUserData(id:number)
  {
    // var conf=confirm('Are you sure want to delete this data?');
    // if(conf)
    // {
    //   console.log("in to")
    //   this.service.deleteUser(id).subscribe(result=>{
    //     window.location.reload()
    //   },error=>{
    //     alert('Tidak dapat menghapus data'+error);
    //   })
    // }

    // Swal.fire({
    //   title: 'Are you sure want to delete this data?',
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, delete it!'
    // }).then((result) => {
    //   if (result.isConfirmed) {

    //     this.service.deleteUser(id).subscribe(result=>{
    //           window.location.reload()
    //         },error=>{
    //           alert('Tidak dapat menghapus data'+error);
    //         })
    //   }
    // })
    
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
