import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from 'src/app/models/project';
import { Projectmongo } from 'src/app/models/Projectmongo';
import { ProjectMapper } from 'src/app/models/project-mapper';
import { Employee } from 'src/app/models/employee';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  @ViewChild('projectCreateForm', { static: true }) form: any;
  project: Project; //For mysql
  projectDescStake: Projectmongo;   //For mongo
  projectMapper: ProjectMapper;
  manager: Employee;
  employees = new Array<Employee>();
  errormsg: boolean = false;


  constructor(
    private router: Router, private projectService: ProjectService,
    private employeeService: EmployeeService
  ) {

      this.projectMapper = new ProjectMapper();

  }


  ngOnInit() {
    this.findAvailableManagers();
  }


  findAvailableManagers() {
    this.employeeService.findAll().subscribe(
      response => {
        this.employees = response.map(item => {
          return new Employee(
            item.employeeId,
            item.firstName,
            item.lastName,
            item.middleName,
            item.username,
            item.password,
            item.userType,
            item.availability,
            item.eulAgreement);
        });
        /*if (this.employees.length > 0) {
          this.projectMapper.managerEmail = this.employees[0].email;
        }*/
        if(this.employees.length <= 0){
          this.errormsg = true;
         // this.errormsg = "Sorry!! No managers are avilable at the moment."
        }
        else{
          this.errormsg = false;
        }
      });
  }

  

  onSubmit() {
    let poject1: Project;

    //Get the selected manager object from the list
    this.manager = this.employees.find(i => i.username === this.projectMapper.managerEmail);

    //For mysql project table
    this.project = new Project();
    this.project.projectId = 0;
    this.project.isCompleted = false;
    this.project.name = this.projectMapper.name;
    this.project.startDate = this.projectMapper.startDate;
    this.project.endDate = this.projectMapper.endDate;
    this.project.managerId = this.manager;
    this.project.budget = this.projectMapper.budget;
    this.project.githubLink = this.projectMapper.githubLink;

    //For mongo database
    this.projectDescStake = new Projectmongo();
    if(this.projectMapper.projectDesc === undefined){
      this.projectDescStake.projectDesc = '';
    }
    else{
      this.projectDescStake.projectDesc = this.projectMapper.projectDesc;
    }
    this.projectDescStake.stakeholders = this.projectMapper.stakeholders;

    //Data saving operation 
    this.projectService.save(this.project).subscribe(result => {

      poject1 = result;
      this.projectDescStake.projectId = poject1.projectId;
      this.projectService.saveProjectDesc(this.projectDescStake).subscribe(result2 => { });
      this.findAvailableManagers();
    });

    alert('SUCCESS!! :-)\n\n');

    this.form.reset();
  }
}
