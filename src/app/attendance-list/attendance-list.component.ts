import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { CompanyService } from '../company/company.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.css']
})
export class AttendanceListComponent implements OnInit {
  attendance: any;
  data: any;

  constructor(private route: ActivatedRoute, private companyService: CompanyService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.getAttendanceList();
  }


  getAttendanceList(){
    const id = this.route.snapshot.paramMap.get('id');
    const url = '/user/get_list_attendance/';
      if (id !== null) {
        this.companyService.getAttendanceList(id,url).subscribe((data: any) => {
          this.attendance = data.data;
        });
      } else {
        this.attendance = null;
      }
    }

    deleteAttendance(type_check_int:number,id:number)
    {
      var conf=confirm('Delete item?');
      if(conf)
      {
        console.log("in to")
        console.log(id,type_check_int)
        this.companyService.delete(id,type_check_int).subscribe(result=>{
          window.location.reload()
        },error=>{
          alert('Tidak dapat menghapus data'+error);
        })
      }
    }
}
