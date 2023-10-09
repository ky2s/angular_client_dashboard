import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { CompanyService } from '../company/company.service';

@Component({
  selector: 'app-company-admin',
  templateUrl: './company-admin.component.html',
  styleUrls: ['./company-admin.component.css']
})
export class CompanyAdminComponent implements OnInit {
  company: any;

  constructor(private route: ActivatedRoute, private companyService: CompanyService) {}

  ngOnInit() {
    this.getCompanyAdmin();
  }

  getCompanyAdmin(){
  const id = this.route.snapshot.paramMap.get('id');
  const url = '/company/get_list_company_as_admin/';
    if (id !== null) {
      this.companyService.getCompanyAdmin(id, url).subscribe((data: any) => {
        this.company = data.data;
      });
    } else {
      this.company = null;
    }
  }
}
