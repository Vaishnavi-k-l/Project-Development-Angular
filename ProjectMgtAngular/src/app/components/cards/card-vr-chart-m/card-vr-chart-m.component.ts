import { CompletedialogComponent } from '../../completedialog/completedialog.component';
import { TaskService } from '../../../services/task.service';
import { ProjectService } from '../../../services/project.service';
import { Component, OnInit, APP_INITIALIZER } from '@angular/core';
import { ChartService } from '../../../services/chart.service';
import { Chart } from 'chart.js';
import { Task } from 'src/app/models/task';
import { Project } from 'src/app/models/project';
import { MatDialog } from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-vr-chartM',
  templateUrl: './card-vr-chart-m.component.html',
  styleUrls: ['./card-vr-chart-m.component.css']
})
export class CardVrChartMComponent implements OnInit {

  doughnutchart: any;
  tasks: Task[];
  progress = 0;
  ProjectProgress: number;
  projectTitle: string;
  projectSubtitle = 'Project Progress';
  projectId : number;
  project: Project;
  projectDescription: string;

  projectDemo: Project;
  enterProject: string;
  projectName: string;
  dd: string;

  constructor(private projectService: ProjectService, private taskService: TaskService, public dialog: MatDialog, public router: Router) {
    this.tasks = new Array<Task>();
  }

  ngOnInit() {
     this.projectId = Number(sessionStorage.getItem('pid'));
    // this.chartService.getProjectProgressData().subscribe(response => {
    //   this.tasks = response;
    //   this.projectTitle = this.tasks[0].projectId.description;
    //   this.getTaskProgressDetails();
    //   this.populateChart();
    // });
    this.projectService.findById(this.projectId).subscribe(response => {
      this.project = response;
      this.projectTitle = response.name;
      this.projectDescription = response.githubLink;
      this.projectDemo = response;
      this.projectName = this.projectDemo.name;
    });

    this.taskService.findTask(this.projectId).subscribe(response => {
      this.tasks = response;
      this.getTaskProgressDetails();
      this.populateChart();
    });



  }

  getTaskProgressDetails() {
    for (const task of this.tasks) {
      this.progress += task.progress;
    }
  }

  populateChart() {
    if(this.progress!=0){
      this.ProjectProgress = Math.round(this.progress / this.tasks.length);
    }else{
      this.ProjectProgress=0;
    }
    
    this.doughnutchart = new Chart('doughnutchart_canvas', {
      type: 'doughnut',
      data: {
        labels: ['Progress', 'Progress Remaining'],
        datasets: [{
          label: 'Points',
          data: [this.ProjectProgress, 100 - this.ProjectProgress],
          backgroundColor: ['#1fd10f', '#e3e3e3']
        }]
      },
      options: {
        cutoutPercentage: 50,
        legend: {
          display: false
        },
        animation: {
          animateScale: true
        }
      }

    });
  }

  refresh() {
    this.progress = 0;
    this.ngOnInit();
  }

  description() {
    window.open(this.projectDescription);
  }


 logout(){
    sessionStorage.removeItem('eid');
    sessionStorage.removeItem('useType');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('pid');
    sessionStorage.removeItem('tid');
    this.router.navigate(['login']);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CompletedialogComponent, {
      width: '400px',
      data: {projectName: this.projectName, enterProject: this.enterProject}
    });


    dialogRef.afterClosed().subscribe( result => {
      console.log('The dialog was closed');
      this.enterProject = result;
      const dd = this.projectName;

      if (this.enterProject === undefined) {
          console.log('Project is not deleted');
      } else if (this.enterProject.toUpperCase() === dd.toUpperCase()) {
        console.log(this.projectDemo);

        this.projectService.setProjectComplete(this.projectDemo).subscribe( response => {});

        console.log('hi 2');

        console.log('Project is deleted.');
        this.logout();
      }

    });
  }
}