import { ProjectMemberService } from './../../services/projectmember.service';

import { Component, OnInit } from '@angular/core';

import { TnCServiceService } from 'src/app/services/tn-cservice.service';
import { Employee } from 'src/app/models/employee';



import { Router } from '@angular/router';
import { Projectmember } from 'src/app/models/projectmember';
@Component({
  selector: 'app-agreedoc',
  templateUrl: './agreedoc.component.html',
  styleUrls: ['./agreedoc.component.css']
})
export class AgreedocComponent implements OnInit {

  title = 'eulAgg';

  disabled = false;
  hide = true;

  terms : any;

  employee : Employee;

  projectMember = new Array<Projectmember>();

  constructor(private termsService: TnCServiceService, private router: Router , 
    private projectMemberService: ProjectMemberService){

  }

  ngOnInit(){
    console.log("hi")
    let employee111 : number = Number(sessionStorage.getItem('eid'));
     this.getEmployee(employee111); 
     this.getAuthorizedProject(employee111);
/*
     this.gitTerms.getTerms().subscribe(response => {
       for(let key in response){
          if(response.hasOwnProperty(key)) {
            this.terms = response[key];
          }
       }
     })
     */
     //this.terms= "terms and condition para";

     
  }


  getAuthorizedProject(employeeId: number){
    this.projectMemberService.findProjectByEmpId(employeeId).subscribe(response => {
      this.projectMember = response.map(item => {
        return new Projectmember(         
          item.projectId,
          item.employeeId,
          item.authority
         
          );
      });
      console.log(response);
      //console.log(this.projectMember);
      console.log("Authorized Project Id "+this.projectMember[0].projectId.projectId.toString());
      sessionStorage.setItem('pid',this.projectMember[0].projectId.projectId.toString());
    } );

  }



  getEmployee(employeeId: number): void{
    this.termsService.findById(employeeId).subscribe(
      response => {
        
        this.employee = response;

        console.log(response);

        if(this.employee.eulAgreement === true){

          //DETERMINE THE USERTYPE
          if(this.employee.userType === "MANAGER"){
            this.router.navigate(['manager']);

          }
          else if(this.employee.userType === "MEMBER"){
            this.router.navigate(['employee']);

          }
    
        }
        else{
          this.hide= false;
          this.router.navigate(['agreedoc']);

        }
      }
  
    );
    return;
  }

  Submit(){

    console.log("CHECKED!!")
    console.log('BEFORE'+this.employee.eulAgreement);
    this.termsService.updateEulValue(this.employee).subscribe(response2 => {
      this.employee = response2;
      console.log('AFTER'+this.employee.eulAgreement);

    });
    //DETERMINE THE USERTYPE
    if(this.employee.userType === "MANAGER"){
      this.router.navigate(['manager']);

    }
    else if(this.employee.userType === "MEMBER"){
      this.router.navigate(['employee']);

    }

  }

}