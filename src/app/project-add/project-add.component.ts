import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project/project.service';


@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent {

  constructor(
    private service : ProjectService,
    private router : Router
  ){
  }

  title='Project Add';

  //inisial untuk data formulir
  project:any={};

  add(postData:any){

    this.service.add(postData.name, postData.description).subscribe(res=>{

      alert('Success: Data has save');
      this.router.navigate(['project']);
    },err=>{
      // this.loading=false;
      console.log(err)
      alert('Failed: data is not saved');
    });
  }

  
}
