import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {


  errorMessage:string;
  tasks: Task[];
  taskdata: any;
  

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks(sessionStorage.getItem("pid"));
    
  }
  getTasks( id) {
    this.taskService.getTaskById(id).subscribe(
    task => {
     
        this.tasks = task;
        if(this.tasks.length<=0)
        {
          this.errorMessage="No tasks added yet!"
        }
    console.log(this.tasks);  
    
    },
    err => {
      
    console.log(err);
    }
    );
    }

  logId(val){
    this.taskdata = val.getAttribute('data-task-id');
    console.log(this.taskdata);
    sessionStorage.setItem('tid',this.taskdata);
  }

  

}