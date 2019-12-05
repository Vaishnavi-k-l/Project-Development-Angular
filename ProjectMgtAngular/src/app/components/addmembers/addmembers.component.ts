import { Router } from '@angular/router';
import { ProjectMemberService } from './../../services/projectmember.service';
import { ProjectService } from './../../services/project.service';
import { SkillsService } from './../../services/skill.service';
import { EmployeeSkill } from 'src/app/models/employeeskills';
import { Skills } from 'src/app/models/skills';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Projectmember } from 'src/app/models/projectmember';
import { Project } from 'src/app/models/project';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
@Component({
  selector: 'app-addmembers',
  templateUrl: './addmembers.component.html',
  styleUrls: ['./addmembers.component.css']
})
export class AddmembersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'username', 'add'];
  // dataSource: any;
  dataSource: any;
  skill: string;
  skills: Array<Skills>;
  employees = new Array<Employee>();
  projectMember: Projectmember;
  projectId : number;
  projectDemo: Project;
  // employeesAndSkills = new Array<EmployeeSkill>();
  // employeeandSkill: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private employeeService: EmployeeService,
    private skillsService: SkillsService,
    private projectService: ProjectService,
    private projectMemberService: ProjectMemberService,
    private router : Router,
    private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.projectId = Number(sessionStorage.getItem('pid'));
    this.skillsService.findAll().subscribe(response => {
      this.skills = response;
    });

    this.projectService.findById(this.projectId).subscribe(response => {
      this.projectDemo = response;
    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onChange(value: string) {
    console.log(this.skill);
    this.employeeService.findSkilledEmployee(value).subscribe(response => {
      this.employees = response;
      console.log(response);
      this.dataSource = this.employees;
    });
  }

  addEmployee(employeeId: number, row: HTMLElement) {

    if (window.confirm('Are you sure you want to add this employee ?')) {
      this.projectMember = new Projectmember();
      this.projectMember.employeeId = this.employees[employeeId];
      this.projectMember.authority = true;
      this.projectMember.projectId = this.projectDemo;

      this.projectMemberService.save(this.projectMember).subscribe(response => {
        console.log('project member added')
        this.router.navigate(['manager/workforceM']);
      });

      this.delete(row);
    }
   
  }

  delete(row){
    this.dataSource = this.dataSource.filter(i => i !== row);
    this.changeDetectorRef.detectChanges();
  }


}