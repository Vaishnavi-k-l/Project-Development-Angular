import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './../models/project';
import { Injectable } from '@angular/core';
import {Projectmongo} from './../models/Projectmongo';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectUrl: string;
  private projectManagerUrl : string;
  private projectDescServiceUrl : string;
  
  private projectByIdUrl: string;
  private completeProjectUrl: string;


  constructor(private http: HttpClient) {
    this.projectUrl = 'http://localhost:9999/getProjectDetails';
    
    
    this.projectManagerUrl = 'http://localhost:1188/project/Project';
    this.projectDescServiceUrl = 'http://localhost:1188/projectDesc/saveProjectDesc';
    this.projectByIdUrl = 'http://localhost:1188/project/ProjectById';
    this.completeProjectUrl = 'http://localhost:1188/project/CompleteProject';
  }
//get all projects
  public getAllProjectDetails(): Observable<Project[]> {
  //  var allUrl ="http://localhost:9999/getAllProjects";
    var valu= this.http.get<Project[]>(this.projectUrl);
    console.log(valu);
    return valu;
 }
  public findCompletedAll(): Observable<Project[]> {
     var comp="completed";
     const url = `${this. projectUrl}/${comp}`;

     var valu= this.http.get<Project[]>(url);
     console.log(valu);
     return valu;

// var valu=this.http.get<Project[]>('');
// console.log(valu);
// return valu;

  }

  public findOngoing(): Observable<Project[]> {
   var ong="ongoing";
    const url = `${this. projectUrl}/${ong}`;
   return this.http.get<Project[]>(url);
 
  }

 
//get project by id from sql
  public getProjectById(id: number): Observable<Project[]> {
    const url = `${this. projectUrl}/${id}`;
    console.log(url);
     return this.http.get<Project[]>(url);
    }
    private handleError(error: any): Promise<Array<any>> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
      }
//get project detail by id from mongo
      public findMongodata(id: number): Observable<Projectmongo[]> {
        var mong="mongodb";
        const url = `${this. projectUrl}/${mong}/${id}`;
        return this.http.get<Projectmongo[]>(url);
      }
  public getOngoingProjectByYear(yr:number):Observable<Project[]> {
    var pyr ="http://localhost:9999/api/OngoingByYear";
    const url = `${pyr}/${yr}`;
    return this.http.get<Project[]>(url);
  }

  public getCompletedProjectByYear(yr:number):Observable<Project[]> {
    var pyr ="http://localhost:9999/api/CompletedByYear";
    const url = `${pyr}/${yr}`;
    return this.http.get<Project[]>(url);
  }
  public getLatestProject():Observable<Project[]>{
    var latestUrl ="http://localhost:9999/api/getLatest";
  
    return this.http.get<Project[]>(latestUrl);
  }

  public getProjectCount():Observable<number[]>{
    var CountUrl ="http://localhost:9999/api/getByYear";
   
    return this.http.get<number[]>(CountUrl);
  }

  // public saveProject(project: Project) {
    
  //   return this.http.post<Project>(this.projectManagerUrl, project);
  // }

  public saveProjectDesc(projectDescStake: Projectmongo) {
    
    return this.http.post<Projectmongo>(this.projectDescServiceUrl, projectDescStake);
  } 


  public findAll(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectManagerUrl);
  }

  public save(project: Project) {
    return this.http.post<Project>(this.projectManagerUrl, project);
  }

  public findById(id: number): Observable<Project> {
    return this.http.get<Project>(this.projectByIdUrl + '/' + id);
  }

  public setProjectComplete(project: Project) {
    return this.http.put<boolean>(this.completeProjectUrl, project);
  }
}