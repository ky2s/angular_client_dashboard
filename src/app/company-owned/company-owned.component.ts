import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { CompanyService } from '../company/company.service';

@Component({
  selector: 'app-company-owned',
  templateUrl: './company-owned.component.html',
  styleUrls: ['./company-owned.component.css']
})
export class CompanyOwnedComponent implements OnInit {
  company: any;

  constructor(private route: ActivatedRoute, private companyService: CompanyService) {}

  ngOnInit() {
    this.getCompanyOwned();
  }

  getCompanyOwned(){
  const id = this.route.snapshot.paramMap.get('id');
  const url = '/company/get_list_company_as_owner/';
    if (id !== null) {
      this.companyService.getCompanyOwned(id, url).subscribe((data: any) => {
        this.company = data.data;
      });
    } else {
      this.company = null;
    }
  }
}
