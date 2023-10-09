import { Component } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-all-users-edit',
  templateUrl: './all-users-edit.component.html',
  styleUrls: ['./all-users-edit.component.css']
})
export class AllUsersEditComponent {
  User: any;
  dataList: any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private UserService: UserService
  ){
    this.getDetailUser();
  }

  title='Edit User';
  appSettingsValue:any={};

  getDetailUser(){
  const id = this.route.snapshot.paramMap.get('id');
  const url = '/user/get_detail_user/';
    if (id !== null) {
      this.UserService.getUser(id, url).subscribe((data: any) => {
        this.User = data.data;
      });
    } else {
      this.User = null;
    }
  }

  edit(postData:any){
    this.UserService.edit(postData[0].name, postData[0].email, postData[0].phone, postData[0].encrypt_code, postData[0].id).subscribe(res=>{
      // console.log(postData[0].name)
      // alert('Success: Data has save');
      // window.location.reload();
      this.router.navigate(['all_users']);
    },err=>{
      // this.loading=false;
      console.log(err)
      // window.location.reload();
      alert('Failed: data is not saved');
    });
  }
}
