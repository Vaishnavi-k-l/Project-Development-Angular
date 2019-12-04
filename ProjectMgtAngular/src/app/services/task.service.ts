import { Observable } from 'rxjs';
import { Task } from './../models/task';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskUrl:string;
  private taskURL2:string;
  private saveTaskURL: string;
  constructor(private http: HttpClient) {
    this.taskUrl='http://localhost:9999/getTasksById";';
    this.taskURL2 = 'http://localhost:1188/task/TaskByProjectId';
    this.saveTaskURL = 'http://localhost:1188/task/Task';

   }

  public getTaskById(id: number): Observable<Task[]> {
    const url = `${this. taskUrl}/${id}`;
    console.log(url);
    return this.http.get<Task[]>(url);
    }

    

  public findTask(projectId: number): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskURL2+'/'+ projectId);
  }

  public save(task: Task) {    
    return this.http.post<Task>(this.saveTaskURL, task);
  }


  

}