
import { Subtaskmapper } from '../../models/subtaskmapper';
import { SubtaskService } from '../../services/subtask.service';
import { ProjectMemberService } from '../../services/projectmember.service';
import { TaskDataStorageService } from '../../services/taskdatastorage.service';
import { Subtask } from '../../models/subtask';
import { ChartService } from 'src/app/services/chart.service';
import { Component, OnInit, Inject } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Employee } from 'src/app/models/employee';
import { Router, ActivatedRoute } from '@angular/router';
import {CreateSubTaskComponent} from '../create-sub-task/create-sub-task.component';
import { Projectmember} from 'src/app/models/projectmember';

@Component({
  selector: 'app-subtaskM',
  templateUrl: './subtaskM.component.html',
  styleUrls: ['./subtaskM.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class SubtaskMComponent implements OnInit {

  dataSource: any;
  columnsToDisplay = ['subTaskTitle',
    'subTaskDescription',
    'startDate',
    'dueDate',
    'employeeId',
    'progressPercentage'];


  subtaskColumns = ['Name',
    'Description',
    'Start Date',
    'Due Date',
    'Employee Assigned',
    'Progress'];


  expandedElement: Subtask | null;
  subtasks: Subtask[];
  subtask: Subtask;
  projectMembers = new Array<Projectmember>();
  // Assign from session
  projectId : number;
  taskName: string;


  constructor(private data: TaskDataStorageService,
              private projectMemberService: ProjectMemberService,
              private subTaskService: SubtaskService,
              public dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute) {
    this.subtask = new Subtask();
    this.taskName = JSON.parse(this.data.getData()).taskTitle;
  }

  ngOnInit() {
    this.projectId = Number(sessionStorage.getItem('pid'));
    // obtain projectId from session

    this.projectMemberService.getProjectMembers(this.projectId).subscribe(response => {
      this.projectMembers = response.map(item => {
        return new Projectmember(
          item.projectId,
          item.employeeId,
          item.authority
        );
      });
    });





    this.subTaskService.findSubTask(JSON.parse(this.data.getData()).taskId).subscribe(response => {
      this.subtasks = response.map(item => {
        return new Subtask(
          item.subTaskId,
          item.subTaskTitle,
          item.subTaskDescription,
          item.startDate,
          item.dueDate,
          item.progressPercentage,
          item.comment,
          item.employeeId,
          item.taskId
        );
      });
      this.dataSource = this.subtasks;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateSubTaskComponent, {

      data: {
        subTaskTitle: '',
        subTaskDescription: '',
        startDate: '',
        dueDate: '',
        employeeId: '',
        projectMembers: this.projectMembers
      }
    });

    dialogRef.beforeClosed().subscribe(result => {
      if (result !== undefined && result.action !== 0) {
        this.subtask.taskId = JSON.parse(this.data.getData());
        this.subtask.subTaskId = 0;
        this.subtask.employeeId = result.employeeId;
        this.subtask.subTaskTitle = result.subTaskTitle;
        this.subtask.startDate = result.startDate;
        this.subtask.dueDate = result.dueDate;
        this.subtask.comment = "Comment here";
        this.subtask.subTaskDescription = result.subTaskDescription;
        this.subtask.progressPercentage = 0;
        this.subTaskService.save(this.subtask).subscribe(response => {
          console.log('Subtask Saved: ' + response);
        });
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
}