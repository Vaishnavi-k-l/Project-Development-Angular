import { Component, OnInit ,ViewChild} from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-ongoing-project',
  templateUrl: './ongoing-project.component.html',
  styleUrls: ['./ongoing-project.component.css']
})
export class OngoingProjectComponent implements OnInit {
  projects :Project[];
  dSource;
  errormes;
  dColumns: string[] = ['name', 'startDate','endDate','action'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private projectService: ProjectService) { }
  projectdata;
  ngOnInit() {
    this.projectService.findOngoing().subscribe(data => {
      this.projects = data;
      this.dSource = new MatTableDataSource<Project>(this.projects);
      this.dSource.paginator = this.paginator;
    });
    
  }
  gotonext(proj)
  {
    this.projectdata = proj.getAttribute('data-project-id');
    sessionStorage.setItem('pid', this.projectdata);
  }

  searchProj(yearData)
  {
    if(yearData=="")
    {
      this.projectService.findOngoing().subscribe(data => {
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
    this.projectService.getOngoingProjectByYear(yearData).subscribe(yearValue =>{
      this.projects=yearValue;
      if(this.projects.length<=0)
      {
        this.errormes="Sorry! No Projects created in the year "+yearData+"! ";
      }
      else{
        this.errormes=""
      }
      this.dSource = new MatTableDataSource<Project>(this.projects);
        this.dSource.paginator = this.paginator;
    });
  }

}