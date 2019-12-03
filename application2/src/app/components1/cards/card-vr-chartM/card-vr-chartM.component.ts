import { CompletedialogComponent } from '../../completedialog/completedialog.component';
import { TaskService } from '../../../services/task.service';
import { ProjectService } from '../../../services/project.service';
import { Component, OnInit, APP_INITIALIZER } from '@angular/core';
import { ChartService } from '../../../services/chart.service';
import { Chart } from 'chart.js';
import { Task } from 'src/app/models/task';
import { Project } from 'src/app/models/project';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card-vr-chartM',
  templateUrl: './card-vr-chartM.component.html',
  styleUrls: ['./card-vr-chartM.component.css']
})
export class CardVrChartMComponent implements OnInit {

  doughnutchart: any;
  tasks: Task[];
  progress = 0;
  ProjectProgress: number;
  projectTitle: string;
  projectSubtitle = 'Project Progress';
  projectId = 1;
  project: Project;
  projectDescription: string;

  projectDemo: Project;
  enterProject: string;
  projectName: string;
  dd: string;

  constructor(private projectService: ProjectService, private taskService: TaskService, public dialog: MatDialog) {
    this.tasks = new Array<Task>();
  }

  ngOnInit() {
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
    this.ProjectProgress = this.progress / this.tasks.length;
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
      }

    });
  }
}