import { Project } from 'src/app/models/project';
import { ProjectService } from '../../../services/project.service';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../models/task';

import { ChartService } from '../../../services/chart.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { ArrayDataSource } from '@angular/cdk/collections';


@Component({
  selector: 'app-card-hr-chartM',
  templateUrl: './card-hr-chart-m.component.html',
  styleUrls: ['./card-hr-chart-m.component.css']
})
export class CardHrChartMComponent implements OnInit {

  barchart: any;
  tasks: Task[];
  labels = [];
  progress = [];
  taskCount: number;
  taskHeader = 'Tasks';
  taskSubtitle = 'Task Progress';
  projectId: number;
  project: Project;
  constructor(private projectService: ProjectService, private taskService: TaskService) { }

  ngOnInit() {
     this.projectId = Number(sessionStorage.getItem('pid'));
    this.taskService.findTask(this.projectId).subscribe(response => {
      this.tasks = response;
      this.getTaskDetails();
      this.populateChart();
    });
  }

  getTaskDetails() {
    for (const task of this.tasks) {
      this.labels.push(task.taskTitle);
      this.progress.push(task.progress);
    }
  }

  populateChart() {
    this.barchart = new Chart('barchart_canvas', {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Percentage of Task Completion',
          data: this.progress,
          backgroundColor: [
            'rgba(255,99,132,0.2)',
            'rgba(0,255,0,0.2)',
            'rgba(0,0,255,0.3)'
          ]
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              suggestedMax: 100
            }
          }]
        }
      }
    });
  }

  refresh() {
    this.labels = [];
    this.progress = [];
    this.ngOnInit();
  }
}