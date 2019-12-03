import { Injectable } from '@angular/core';
import { Task } from '../models/task';
@Injectable({
  providedIn: 'root'
})
export class TaskDataStorageService {
  private data: any;

  setData(taskObj: Task) {
    sessionStorage.setItem("shareData", JSON.stringify(taskObj));

  }

  getData() {
    return sessionStorage.getItem("shareData");
  }

  constructor() {

  }
}