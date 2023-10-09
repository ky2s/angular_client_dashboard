import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  constructor(
    private service : ProjectService,
  ){
    this.getDataList();
  }

  title="Projects List"
  dataList:any

  getDataList()
  {
    return this.service.get('/project/list').forEach(
      (response: any) => {
        console.log(response.data)
        this.dataList = response.data
      }
    );
  }

  deleteProject(id:number)
  {
    var conf=confirm('Delete item?');
    if(conf)
    {
      console.log("in to")
      this.service.delete(id).subscribe(result=>{
        window.location.reload()
      },error=>{
        alert('Tidak dapat menghapus data'+error);
      })
    }
  }
}
