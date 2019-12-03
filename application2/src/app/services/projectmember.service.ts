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



  constructor(private http: HttpClient) {
    this.projectMemberUrl = 'http://localhost:9999/projectMember/saveProjectMember';
    this.assignedMemberUrl = 'http://localhost:9999/projectMember/getAllMembersOfAProject';


  }


  public getProjectMembers(project: number): Observable<Projectmember[]> {

    return this.http.get<Projectmember[]>(this.assignedMemberUrl+'/'+ project);
  }

  public save(projectMember: Projectmember) {
    return this.http.post<Projectmember>(this.projectMemberUrl, projectMember);
  }

}