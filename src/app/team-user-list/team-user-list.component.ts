import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { CompanyService } from '../company/company.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-team-user-list',
  templateUrl: './team-user-list.component.html',
  styleUrls: ['./team-user-list.component.css']
})
export class TeamUserListComponent implements OnInit {
 dataTeamUser: any;

 constructor(private route: ActivatedRoute, private companyService: CompanyService, private datePipe: DatePipe) {}

 ngOnInit() {
    this.getTeamUserList();
  }
  
  getTeamUserList(){
    const id = this.route.snapshot.paramMap.get('id');
    const url = '/company/team_user_list/';
    if (id !== null) {
        this.companyService.getTeam(id, url).subscribe((data: any) => {
          this.dataTeamUser = data.data;
        });
      } else {
        this.dataTeamUser = null;
      }
  }
}
