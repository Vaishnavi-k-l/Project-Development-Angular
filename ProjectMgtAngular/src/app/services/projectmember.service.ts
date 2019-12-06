import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projectmember } from '../models/projectmember';

@Injectable({
  providedIn: 'root'
})
export class ProjectMemberService {
  private projectMemberUrl : string;
  private assignedMemberUrl : string;

  private findProjectlByEmpIdURL : string;


  constructor(private http: HttpClient) {
    this.projectMemberUrl = 'http://localhost:8050/manager-service/projectMember/saveProjectMember';
    this.assignedMemberUrl = 'http://localhost:8050/manager-service/projectMember/getAllMembersOfAProject';
    this.findProjectlByEmpIdURL = 'http://localhost:8050/admin-service/api/getteams';

  }


  public getProjectMembers(project: number): Observable<Projectmember[]> {

    return this.http.get<Projectmember[]>(this.assignedMemberUrl+'/'+ project);
  }

  public save(projectMember: Projectmember) {
    return this.http.post<Projectmember>(this.projectMemberUrl, projectMember);
  }

  
  public findProjectByEmpId(id:number): Observable<Projectmember[]> {
    return this.http.get<Projectmember[]>(this.findProjectlByEmpIdURL+'/'+id);
  }

}



