import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project/project.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit{

  constructor(
    private service : ProjectService,
    private router : Router,
    private routerParam : ActivatedRoute,

  ){}
  id:any
  dataDetail:any;

  ngOnInit(){
    // console.log(this.routerParam.snapshot.queryParamMap.get('id'));
    this.id = this.routerParam.snapshot.paramMap.get('id');
    this.detail();
  }
  title="Project Edit"
  projectID:any
  projectName:any
  projectDesc:any
  
  //inisial untuk data formulir
  project:any={};

  detail()
  {
    return this.service.get(this.id).forEach(
      (response:any)=>{
        console.log("response.data_detail")
        console.log(response.data_detail)
        this.projectID=response.data_detail.id
        this.projectName=response.data_detail.name
        this.projectDesc=response.data_detail.description
      }
    )
  }

  edit(postData:any)
  {
      console.log(postData);
      console.log(this.projectID);
      // return false;

      if (postData.name==undefined){
        postData.name = this.projectName
      }
      if (postData.description==undefined){
        postData.description = this.projectDesc
      }
      
      this.service.edit(this.projectID, postData.name, postData.description).subscribe(res=>{
        alert('Success: Data has save');
        this.router.navigate(['project']);
      },err=>{
        // this.loading=false;
        console.log(err)
        alert('Failed: data is not saved');
      });
   
  }
}
