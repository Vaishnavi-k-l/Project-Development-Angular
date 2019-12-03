import { CompletedialogComponent } from './../completedialog/completedialog.component';
import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Project } from 'src/app/models/project';


@Component({
  selector: 'app-complete-project',
  templateUrl: './completeproject.component.html',
  styleUrls: ['./completeproject.component.css']
})
export class CompleteProjectComponent implements OnInit {
  projectDemo: Project;

  //Requires session implementation
  projectId: number = 1;
  enterProject: string;
  projectName: string;
  dd: string;

  ngOnInit() {
    this.projectService.findById(this.projectId).subscribe(
      response => {
        this.projectDemo = response;
        console.log(this.projectDemo.name);
        this.projectName = this.projectDemo.name;
      });  
  }


  constructor(public dialog: MatDialog,private projectService: ProjectService,) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CompletedialogComponent, {
      width: '250px',
      data: {projectName: this.projectName, enterProject: this.enterProject}
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.enterProject = result;
      let dd = this.projectName;

      if(this.enterProject === undefined){
          console.log("Project is not deleted");
      }
      else if(this.enterProject.toUpperCase() === dd.toUpperCase()){
        console.log("Project is deleted.")
      }

      //console.log(this.enterProject);
    });
  }

}