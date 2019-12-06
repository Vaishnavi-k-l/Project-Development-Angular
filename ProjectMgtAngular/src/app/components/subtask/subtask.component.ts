import { Subtask } from './../../models/subtask';
import { SubtaskService } from './../../services/subtask.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.css']
})
export class SubtaskComponent implements OnInit {
  public subtask:Subtask[];
  errorMessage:string;
  constructor(private subtaskService:SubtaskService) { }

  ngOnInit() {

    this.getSubTasks(sessionStorage.getItem("pid"),sessionStorage.getItem("tid"))
  }

  getSubTasks( pid,tid) {
    this.subtaskService.getSubtask(pid,tid).subscribe(
    task => {
    this.subtask = task;
    if(this.subtask.length<=0)
    {
      this.errorMessage ="No Sub tasks added yet!"
    }
    console.log(this.subtask.length);
    },
    err => {
    console.log(err);
    }
    );
    }

}