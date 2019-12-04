import { Injectable } from '@angular/core';
import { Task } from '../models/task';
@Injectable({
  providedIn: 'root'
})
export class TaskDataStorageService {
  private data: any;

  setData(taskObj: Task) {
    sessionStorage.setItem("tid", JSON.stringify(taskObj));

  }

  getData() {
    return sessionStorage.getItem("tid");
  }

  constructor() {

  }
}