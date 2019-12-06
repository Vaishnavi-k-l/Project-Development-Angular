import { Component, OnInit,Input } from '@angular/core';
import { ProjectService } from './../../../services/project.service';
import { Project } from 'src/app/models/project';
import {Employee} from 'src/app/models/employee';
import {EmployeeService} from './../../../services/employee.service';

@Component({
  selector: 'app-card-sm',
  templateUrl: './card-sm.component.html',
  styleUrls: ['./card-sm.component.css']
})
export class CardSmComponent implements OnInit {
  allProjects: Project[];
  compProject: Project[];
  ongProject: Project[];
  allEmp: Employee[];

  allPorjectcount: number;
  Completedcount: number;
  Ongoingcount: number;
  EmployeeCount:number;
  data;
  iconData: string;
  @Input()
  cardData: string;
  constructor(private projectService:ProjectService,private employeeService: EmployeeService) { }

  ngOnInit() {
    this.projectService.getAllProjectDetails().subscribe(data1 => {
      this.allProjects = data1;
      console.log(this.allProjects);
      this.allPorjectcount = this.allProjects.length;
      this.projectService.findCompletedAll().subscribe(data2 => {
        this.compProject = data2;
        this.Completedcount = this.compProject.length;
        this.projectService.findOngoing().subscribe(data3 => {
          this.ongProject = data3;
          this.Ongoingcount = this.ongProject.length;
          this.employeeService.getAllEmployee().subscribe(data4=>{
            this.allEmp = data4;
            this.EmployeeCount=this.allEmp.length;
            this.check_card_data();
          })
         
        });
      });

    });




  }


  check_card_data() {
    switch (this.cardData) {
      case 'Total':

        this.data = this.allPorjectcount;
        this.iconData = 'assessment';
        break;
      case 'Completed':

        this.data = this.Completedcount;
        this.iconData = 'assessment';
        break;
      case 'Ongoing':
        this.data = this.Ongoingcount;
        this.iconData = 'assessment';
        break;
      case 'Employees':
          this.data = this.EmployeeCount;
          this.iconData = 'assessment';
          break;
      default:
        this.data = 'data missing';
    }
  }

}
