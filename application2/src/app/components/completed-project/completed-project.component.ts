import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { Component, OnInit,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { identifierModuleUrl } from '@angular/compiler';





@Component({
  selector: 'app-completed-project',
  templateUrl: './completed-project.component.html',
  styleUrls: ['./completed-project.component.css']
})
export class CompletedProjectComponent implements OnInit {
  projects : Project[];
  projectdata;
  errormessage;
  dSource;
  dColumns: string[] = ['name', 'startDate','endDate','action'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private projectService:ProjectService) { }

  ngOnInit() {
    this.projectService.findCompletedAll().subscribe(data => {
      this.projects = data;
      
      this.dSource = new MatTableDataSource<Project>(this.projects);
      this.dSource.paginator = this.paginator;
      console.log(this.projects);
      
    });
  }
  gotonext(proj)
  {
    this.projectdata = proj.getAttribute('data-project-id');
    sessionStorage.setItem('pid', this.projectdata);
    console.log(proj);
  }

  searchProj(yearData)
  {
    if(yearData=="")
    {
      this.projectService.findCompletedAll().subscribe(data => {
        this.projects = data;
       
        this.dSource = new MatTableDataSource<Project>(this.projects);
        this.dSource.paginator = this.paginator;
      });
    }
    else{
      this.getProjectByYear(yearData);
    }
  }

  getProjectByYear(yearData)
  {
    this.projectService.getCompletedProjectByYear(yearData).subscribe(yearValue =>{
      this.projects=yearValue;
      if(this.projects.length<=0)
      {
        this.errormessage="Sorry! No Projects created in the year "+yearData+"! ";
      }
      else{
        this.errormessage=""
      }
      this.dSource = new MatTableDataSource<Project>(this.projects);
        this.dSource.paginator = this.paginator;
    });
  }
  

}