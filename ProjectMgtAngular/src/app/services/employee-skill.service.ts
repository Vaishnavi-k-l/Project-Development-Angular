

import { EmployeeSkill } from 'src/app/models/employeeskills';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from 'src/app/models/skills';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSkillService {

  private employeeSkillURL: string;
  private results: Observable<EmployeeSkill[]>;

  constructor(private http: HttpClient) {
    this.employeeSkillURL = 'spring-end/employeeSkill/getEmployeeSkills/';
  }

  public findEmployeeSkill(employeeID: number): Observable<EmployeeSkill[]> {
    return this.http.get<EmployeeSkill[]>(this.employeeSkillURL + employeeID);
  }
}