import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { EmployeeService } from './../../services/employee.service';
import { Projectmember } from './../../models/projectmember';
import { Employee } from './../../models/employee';
import { Component,OnInit,ViewChild } from '@angular/core';


@Component({
  selector: 'app-workforce',
  templateUrl: './work-force.component.html',
  styleUrls: ['./work-force.component.css']
})
export class WorkforceComponent implements OnInit {
  recievedvalue:string;
  errorMessage;
  empdata:Employee[];
  
  dataSource;
  displayedColumns: string[] = ['firstName', 'email'];
  //variable to hold the deatils of employee that is been searched for
  employeeData;
  detailsOfEmployee: Projectmember[];
  
  
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private employeeService:EmployeeService) {
    
   }
   
  ngOnInit() {

    this.employeeService.getAllEmployee().subscribe(result =>{
      this.empdata=result;
      this.dataSource = new MatTableDataSource<Employee>(this.empdata);
      this.dataSource.paginator = this.paginator;
    });
   
    
    //get details from search bar to employee to be searched
   /* this.employeeService.receivedFilter.subscribe((param:string)=>{
      this.recievedvalue=param;
      console.log(this.recievedvalue);
      this.getEmployDetails(this.recievedvalue);
     });
      
      console.log(this.recievedvalue);*/
  }

  getEmployDetails(emp:string) //function to approach service to retrieve data
  {
    this.employeeService.getEmployeeData(emp).subscribe(data => {
      this.empdata = data;
      console.log(this.empdata);
      this.dataSource = new MatTableDataSource<Employee>(this.empdata);
      this.dataSource.paginator = this.paginator;
    });
  }

  logData(val) //get id of the employee to searched
  {
    
    this.employeeData = val.getAttribute('data-emp-id');
    console.log(this.employeeData);
    this.getDetails(this.employeeData); // call the function that invokes the employee service to get theemployee information
   
  }


  //function that invoke the service to get data
  getDetails(val)
  {
    this.employeeService.getEmployeeDetails(val).subscribe(info=>{
      this.detailsOfEmployee=info;
      if(this.detailsOfEmployee.length<=0)
        {
          this.errorMessage="Employee is not working on any project!"
        }
        else{
          this.errorMessage=""
        }
      
    });
  }
  
  
  searchEmp(searchData)
  {
    if(searchData=="")
    {
      this.employeeService.getAllEmployee().subscribe(result =>{
        this.empdata=result;
        console.log(this.empdata);
        this.dataSource = new MatTableDataSource<Employee>(this.empdata);
      this.dataSource.paginator = this.paginator;
      });
    }
    else{
      this.getEmployDetails(searchData);
    }
  }
 

}