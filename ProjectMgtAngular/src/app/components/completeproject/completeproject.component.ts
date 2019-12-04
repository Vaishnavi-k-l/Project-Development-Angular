import { CompletedialogComponent } from './../completedialog/completedialog.component';
import { ProjectService } from '../../services/project.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from '@angular/router';
import { Project } from 'src/app/models/project';


@Component({
  selector: 'app-complete-project',
  templateUrl: './completeproject.component.html',
  styleUrls: ['./completeproject.component.css']
})
export class CompleteProjectComponent implements OnInit {
  projectDemo: Project;

  //Requires session implementation
  projectId: number ;
  enterProject: string;
  projectName: string;
  dd: string;

  ngOnInit() {
    this.projectId = Number(sessionStorage.getItem('pid'));
    this.projectService.findById(this.projectId).subscribe(
      response => {
        this.projectDemo = response;
        console.log(this.projectDemo.name);
        this.projectName = this.projectDemo.name;
      });  
  }


  constructor(public dialog: MatDialog,private projectService: ProjectService, private router: Router) {}

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
        console.log("Project is deleted.");
         //LOGOUT
       



      }

      //console.log(this.enterProject);
    });
  }


   logout(){
    sessionStorage.removeItem('eid');
    sessionStorage.removeItem('useType');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('pid');
    sessionStorage.removeItem('tid');
    this.router.navigate(['login']);
  }

}