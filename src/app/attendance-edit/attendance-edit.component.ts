import { Component } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { Router } from '@angular/router';
import { CompanyService } from '../company/company.service';

@Component({
  selector: 'app-attendance-edit',
  templateUrl: './attendance-edit.component.html',
  styleUrls: ['./attendance-edit.component.css']
})
export class AttendanceEditComponent {
  attendance: any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private CompanyService: CompanyService
  ){
    this.getDetailAttendance();
  }

  title='Edit Attendance';

  getDetailAttendance(){
  const id = this.route.snapshot.paramMap.get('id');
  const url = '/user/get_detail_attendance/';

  if (id !== null) {
      this.CompanyService.getAttendance(id , url).subscribe((data: any) => {

        console.log("data.data")
        console.log(data.data.id)
        console.log(data.data.attendance_in)
        console.log(data.data.attendance_out)
        this.attendance = data.data;
      });
    } else {
      this.attendance = null;
    }
  }

  edit(attendance:any){
    this.CompanyService.edit(attendance.attendance_in, attendance.attendance_out, attendance.id ).subscribe(res=>{
      // console.log(postData[0].name)
      // alert('Success: Data has save');
      // window.location.reload();
      this.router.navigate(['attendance_detail/'+attendance.formid]);
    },err=>{
      // this.loading=false;
      console.log(err)
      // window.location.reload();
      alert('Failed: data is not saved');
    });
  }
}
