import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { CompanyService } from '../company/company.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  form: any;
  company: any;
  dataList: any;
  data: any;
  dataTeam: any;


  constructor(private route: ActivatedRoute, private companyService: CompanyService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.getDetailCompany();
    this.getDataCompanyList();
    this.getDataCompanyFormList();
    this.getTopupHistory();
    this.getTeam();
  }

  getDetailCompany(){
  const id = this.route.snapshot.paramMap.get('id');
  const url = '/company/get_detail_company/';
    if (id !== null) {
      this.companyService.getDetailCompany(id, url).subscribe((data: any) => {
        this.company = data.data;
        this.formatDateLastSubmission();
      });
    } else {
      this.company = null;
    }
  }


  getDataCompanyFormList(){
    const id = this.route.snapshot.paramMap.get('id');
    const url = '/company/get_list_form_company/';
      if (id !== null) {
        this.companyService.getDataCompanyFormList(id, url).subscribe((data: any) => {
          this.form = data.data;
        });
      } else {
        this.form = null;
      }
    }
  

  formatDateLastSubmission() {
    if (this.company[0].last_submission) {
      const formattedDate = this.datePipe.transform(this.company[0].last_submission, 'dd MMM yyyy');
      this.company.date = formattedDate;
      // console.log(this.company.date)
    }
  }

  getDataCompanyList() {
    return this.companyService.get('/company/get_list_company').forEach(
      (response: any) => {
        // console.log(response.data)
        this.dataList = response.data
      }
    );
  }

  getTopupHistory(){
  const url = '/subscription/get_topup_history/';
  const id = this.route.snapshot.paramMap.get('id');
  return this.companyService.getTopupHistoryByIdOrganization(url, id).forEach(
      (response: any) => {
        this.data = response.data
      }
    );
  }

  getTeam(){
  const id = this.route.snapshot.paramMap.get('id');
  const url = '/company/get_team/';
  if (id !== null) {
        this.companyService.getTeam(id, url).subscribe((data: any) => {
          this.dataTeam = data.data;
        });
      } else {
        this.dataTeam = null;
      }
    }
}
