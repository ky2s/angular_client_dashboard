import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { CompanyService } from '../company/company.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-attendance-detail',
  templateUrl: './attendance-detail.component.html',
  styleUrls: ['./attendance-detail.component.css']
})
export class AttendanceDetailComponent implements OnInit {
  attendance: any;
  data: any;

  constructor(private route: ActivatedRoute, private companyService: CompanyService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.getDataCompanyFormAttendanceDetail();
  }


  getDataCompanyFormAttendanceDetail(){
    const id = this.route.snapshot.paramMap.get('id');
    const url = '/form/get_list_attendance_form/';
      if (id !== null) {
        this.companyService.getDataCompanyFormAttendanceDetail(url,id).subscribe((data: any) => {
          this.attendance = data.data;
        });
      } else {
        this.attendance = null;
      }
    }
}
