import { Projectmongo } from './../../models/projectmongo';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  projects:Project[];
  mongodata:Projectmongo[];

  constructor(
     private projectService:ProjectService
  ) { }

  ngOnInit() {
    
   
    this.getProject(sessionStorage.getItem("pid"));

}
getProject( id ) {
  this.projectService.getProjectById(id).subscribe(
    proj => {
    this.projects = proj;
    console.log(this.projects);
    console.log('Nid' +this.projects[0].budget);
    this.projectService.findMongodata(id).subscribe(
      resultvalue => {
        this.mongodata= resultvalue;
        console.log(this.mongodata);
      }
    )
    }
    
    );
    
  
    }

  
}