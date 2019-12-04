import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { SubtaskServiceService } from 'src/app/services/subtask-service.service';
import { Subtask } from 'src/app/models/subtask';
import {MediaMatcher} from '@angular/cdk/layout';
import {Router} from '@angular/router';
@Component({
  selector: 'app-employee-updtae',
  templateUrl: './employee-updtae.component.html',
  styleUrls: ['./employee-updtae.component.css']
})
export class EmployeeUpdtaeComponent implements OnInit {

  
  notifications = 5;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  //tasks = taskDescription;
  id: number;
  id1: number;
  subtasks: Subtask[];
  subtaskObj: Subtask;

  //For the comments
 
  showForm = "none";
  //updateProgress = 0;


  barValue = "block";
  textValue = "none";
 

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  constructor(private subtaskService: SubtaskServiceService,changeDetectorRef: 
    ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);  
   }


  ngOnInit() {
    this.loading();
  }
  private loading() {

    this.subtaskService.findAll().subscribe(data => {
      console.log(data);
      this.subtasks = data;
      this.id1 = 0;


    });
  }
  onSubmit(progress: number) {
    //this.id = this.subtaskObj.subTaskId;
    //console.log(this.id);
  }

  update(id1) {

    this.barValue = this.barValue == "block" ? "none" : "block";
    this.textValue = this.textValue == "none" ? "block" : "none";

    document.getElementById("progress-bar").style.display = this.barValue;
    document.getElementById("progress-text").style.display = this.textValue;
   
    
    document.getElementById("progress-comment").style.display = this.textValue;

    console.log(this.subtasks[id1].progressPercentage)
    console.log(this.subtasks[id1].comment)

    if(this.subtasks[id1].comment == "")
    {
      this.subtasks[id1].comment = "Comment here"
      //console.log(this.subtasks[id1].comment);
    }

//console.log(this.subtasks[id1].comment);
    this.subtaskService.updateProgress(this.subtasks[id1].subTaskId, this.subtasks[id1].progressPercentage, this.subtasks[id1].comment)
      .subscribe(data => {
        console.log(data);

      });



  }
  submitComment(){
    console.log("submitted")
  }

  updatedProgress(subtaskObj: {
    subTaskId: number,
    subTaskTitle: string,
    subTaskDescription: string,
    startDate: Date,
    dueDate: Date,
    progressPercentage: number
  }) {
    document.getElementById("progress-bar").style.display = "block";
    document.getElementById("progress-text").style.display = "none";
    //console.log(subtaskObj.progressPercentage);
  }

  logout(){
    sessionStorage.removeItem('eid');
    sessionStorage.removeItem('useType');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('pid');
    sessionStorage.removeItem('tid');
    this.router.navigate(['login']);
  }




}

