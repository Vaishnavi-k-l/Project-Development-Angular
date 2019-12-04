import { TaskDataStorageService } from '../../services/taskdatastorage.service';
import { TaskService } from '../../services/task.service';
import { ProjectService } from '../../services/project.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Task } from 'src/app/models/task';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { Project } from 'src/app/models/project';
import { Router } from '@angular/router';
import {CreateTaskComponent} from '../create-task/create-task.component';


@Component({
  selector: 'app-taskM',
  templateUrl: './taskM.component.html',
  styleUrls: ['./taskM.component.css']
})
export class TaskMComponent implements OnInit {

  task: Task;
  tasks: Task[];
  taskdata: any;
  projectId: Project;
  // Access Session
  projectid : number;
  projectDemo: Project;

  constructor(private projectService: ProjectService,
              private taskService: TaskService,
              public dialog: MatDialog,
              private data: TaskDataStorageService,
              private router: Router) { this.task = new Task(); }

  ngOnInit() {
    // Access Session
    this.projectid = Number(sessionStorage.getItem('pid'));
    this.projectService.findById(this.projectid).subscribe(
      response => {
        this.projectDemo = response;
        console.log(this.projectDemo.name);
      });

    this.taskService.findTask(this.projectid).subscribe(response => {
      this.tasks = response;
    });

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateTaskComponent, {

      data: {
        taskTitle: '',
        description: '',
        startDate: '',
        dueDate: '',
      }
    });


    dialogRef.beforeClosed().subscribe(result => {
      if (result !== undefined && result.action !== 0) {
        console.log(result.action);
        this.task.taskId = 0;
        this.task.subTaskCount = 0;
        this.task.progress = 0;
        this.task.projectId = this.projectDemo;
        this.task.taskTitle = result.taskTitle;
        this.task.startDate = result.startDate;
        this.task.dueDate = result.dueDate;
        this.task.description = result.description;
        console.log(this.task);
        this.taskService.save(this.task).subscribe(response => {
          console.log('Task Saved:' + response);
        });
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });

  }

  gotoSubtasks(taskNo: number) {
    this.data.setData(this.tasks[taskNo]);
    this.router.navigate(['manager/subtaskM']);
  }
}