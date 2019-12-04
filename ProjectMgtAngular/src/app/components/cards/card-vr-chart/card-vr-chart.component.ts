import { ProjectService } from './../../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Task } from 'src/app/models/task';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-card-vr-chart',
  templateUrl: './card-vr-chart.component.html',
  styleUrls: ['./card-vr-chart.component.css']
})
export class CardVrChartComponent implements OnInit {
  compProject:Project[];
  ongProject:Project[];
  Completedcount:number;
  Ongoingcount:number;
  
  doughnutchart: any;
  tasks: Task[];
  progress: number = 0;
  ProjectProgress: number;
  projectTitle: String;
  projectSubtitle = "Project Progress"
  constructor(private projectService: ProjectService) {
    this.projectService.findCompletedAll().subscribe(data2=>{
      this.compProject=data2;
      this.Completedcount=this.compProject.length;
      //this.populateChart();
    });

    this.projectService.findOngoing().subscribe(data3=>{
      this.ongProject=data3;
      this.Ongoingcount=this.ongProject.length;
     // this.populateChart();
    });
   }

  ngOnInit() {

    this.projectService.findCompletedAll().subscribe(data2=>{
      this.compProject=data2;
      this.Completedcount=this.compProject.length;
      this.populateChart();
    });

    this.projectService.findOngoing().subscribe(data3=>{
      this.ongProject=data3;
      this.Ongoingcount=this.ongProject.length;
      this.populateChart();
    });
    //this.populateChart();
    
  }

  populateChart() {
    
    this.doughnutchart = new Chart('doughnutchart_canvas', {
      type: 'doughnut',
      data: {
        labels: ['Completed', 'Ongoing'],
        datasets: [{
          label: "Points",
          data: [this.Completedcount, this.Ongoingcount], 
          backgroundColor: ['#1fd10f', 'red']
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

  refresh(){
    this.Completedcount = 0;
    this.ngOnInit();
  }
}