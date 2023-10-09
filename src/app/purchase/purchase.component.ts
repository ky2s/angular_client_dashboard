import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseService } from '../purchase/purchase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
selectedFruit!: string;
  constructor(
    private service : PurchaseService,
    private router : Router
  ){
    this.getDataCompanyList();
    this.getDataNominalList();
    this.getTopupHistory();
  }

  title='Purchase';

  purchase:any={};
  nominal: any;
  dataList: any;
  history: any;
  
  selectedFile: File | null = null;
  
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }
  
  add(postData: any) {

    Swal.fire({
      title: 'Are you sure want to topup saldo to this company?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, sure!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

            const formData = new FormData();
            formData.append('topup_nominal_id', postData.topup_nominal_id);
            formData.append('organization_id', postData.organization_id);
            formData.append('periode', postData.periode);
            formData.append('attachment_file', this.selectedFile as File);
        
            this.service.add(formData).subscribe(res=>{
                  // alert('Success: Purchase has added to Company Account');
                  Swal.fire({
                    icon: 'success',
                    title: 'Topup Quota Success',
                    text: 'Quota has been successfully added',
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      window.location.reload();
                      this.router.navigate(['purchase']);
                    }
                  })
                  
                },err=>{
                  // this.loading=false;
                  console.log(err)
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops Topup Quota Failed',
                    text: 'Quota has failed added',
                  })
                  window.location.reload();
                  // alert('Failed: data is not saved');
                });
      }
    })

  }

  // add(postData:any){

  //   if(confirm("Are you sure want to topup saldo to this company?")) {
  //     this.service.add(postData.topup_nominal_id, postData.organization_id, postData.periode, postData.attachment_file).subscribe(res=>{
        
  //     alert('Success: Purchase has added to Company Account');
  //     window.location.reload();
  //     this.router.navigate(['purchase']);
      
  //   },err=>{
  //     // this.loading=false;
  //     console.log(err)
  //     window.location.reload();
  //     alert('Failed: data is not saved');
  //   });
  // }
  // }

  getDataNominalList(){

    return this.service.get('/get_all_nominal').forEach(
      (response: any) => {
        console.log(response.data)
        this.nominal = response.data
      }
    );
  }

  getDataCompanyList(){

    return this.service.getCompanyList('/company/get_list_company').forEach(
      (response: any) => {
        console.log(response.data)
        this.dataList = response.data
      }
    );
  }

  getTopupHistory(){

    return this.service.get('/subscription/get_topup_history').forEach(
      (response: any) => {
        console.log(response.data)
        this.history = response.data
      }
    );
  }
}
