
import { Component, OnInit, Inject } from '@angular/core';

import { Task } from 'src/app/models/task';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  constructor(
    public dialogRef: MatDialogRef<CreateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task) { }


  onNoClick() {
    this.dialogRef.close({action: 0});
  }

}
