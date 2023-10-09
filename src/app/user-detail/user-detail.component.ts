import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: any;
  company: any;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    this.getUser();
    // this.getCompany();
  }

  getUser(){
  const id = this.route.snapshot.paramMap.get('id');
  const url = '/user/get_detail_user/';
    if (id !== null) {
      this.userService.getUser(id, url).subscribe((data: any) => {
        this.user = data.data;
      });
    } else {
      this.user = null;
    }
  }
}
