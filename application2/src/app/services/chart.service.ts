import { Task } from './../models/task';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Subtask } from '../models/subtask';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }

  getProjectProgressData(): Observable<Task[]>{
    return this.http.get<Task[]>('https://raw.githubusercontent.com/NidarshN/tutorial/master/task1.json');
  }

  getTaskData(): Observable<Task[]>{
    return this.http.get<Task[]>('https://raw.githubusercontent.com/NidarshN/tutorial/master/task1.json');
  }

  getSubtaskData(): Observable<Subtask[]> {
    return this.http.get<Subtask[]>('https://raw.githubusercontent.com/nishasharma19/trailFiles/master/subtasks.json');
  }


  getEmployeeData(): Observable<Employee[]> {
    return this.http.get<Employee[]>('https://raw.githubusercontent.com/nishasharma19/trailFiles/master/employee.json');
  }

  saveTask(task: Task){
    return this.http.post<Task>('', task);
  }
}


