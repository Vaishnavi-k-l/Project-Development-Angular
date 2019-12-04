
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { Component, OnInit, Inject } from '@angular/core';
import { SubtaskMComponent } from '../subtaskM/subtaskM.component';
@Component({
  selector: 'app-create-sub-task',
  templateUrl: './create-sub-task.component.html',
  styleUrls: ['./create-sub-task.component.css']
})
export class CreateSubTaskComponent {

  constructor(
    public dialogRef: MatDialogRef<CreateSubTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SubtaskMComponent) {
  }

  onNoClick(): void {
    this.dialogRef.close({action: 0});
  }

}