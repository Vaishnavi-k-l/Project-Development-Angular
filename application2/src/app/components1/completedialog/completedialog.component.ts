import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from 'src/app/models/dialog-data';


@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './completedialog.component.html',
  styleUrls: ['./completedialog.component.css']
})
export class CompletedialogComponent implements OnInit {

  ngOnInit() {
  }

  enval: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<CompletedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }

  onKey(event: any) { 
    console.log(this.data.enterProject);
    let project_name = this.data.projectName;
    if(this.data.enterProject.toUpperCase() === project_name.toUpperCase()){
     
      this.enval = false;
    }
    else{
      this.enval = true;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}