import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  title = 'Company List'
  dataList: any

  subject = 'Hello from snap-in';
  body = 'This is a test email sent from an snap-in application.';

  constructor(
    // private modalService: NgbModal,
    private service: CompanyService,
    private router: Router
  ) {
    this.getDataCompanyList();
  }

  getDataCompanyList() {
    return this.service.get('/company/get_list_company').forEach(
      (response: any) => {
        console.log(response.data)
        this.dataList = response.data
      }
    );
  }

  blockCompany(id:any){
    // alert(id)
    if (confirm("are you sure you want to block this data?")){
      this.service.block(id).subscribe(res=>{

        // alert('Success: Data has save');
        window.location.reload();
        this.router.navigate(['company']);
      },err=>{
        // this.loading=false;
        console.log(err)
        alert('Failed: data is not saved');
      });
    }
  }

  unblockCompany(id:any){
    if (confirm("are you sure you want to unblock this data?")){
      this.service.unblock(id).subscribe(res=>{

        // alert('Success: Data has save');
        window.location.reload();
        this.router.navigate(['company']);
      },err=>{
        // this.loading=false;
        console.log(err)
        alert('Failed: data is not saved');
      });
    }
  }

  deleteCompanyData(id:any){
    // alert(id)
    if (confirm("are you sure you want to delete this company?")){
      this.service.deleteCompany(id).subscribe(res=>{
        window.location.reload();
        this.router.navigate(['company']);
      },err=>{
        // this.loading=false;
        console.log(err)
        alert('Failed: data is not saved');
      });
    }
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
