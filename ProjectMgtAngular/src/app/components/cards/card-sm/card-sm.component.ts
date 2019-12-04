import { Component, OnInit,Input } from '@angular/core';
import { ProjectService } from './../../../services/project.service';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-card-sm',
  templateUrl: './card-sm.component.html',
  styleUrls: ['./card-sm.component.css']
})
export class CardSmComponent implements OnInit {
  allProjects:Project[];
  compProject:Project[];
  ongProject:Project[];
  allPorjectcount:number;
  Completedcount:number;
  Ongoingcount:number;
  data;
  iconData: string;
  @Input()
  cardData: string;
  constructor(private projectService:ProjectService ) { }

  ngOnInit() {
    this.projectService.getAllProjectDetails().subscribe(data1=>{
      this.allProjects=data1;
      console.log(this.allProjects);
     this.allPorjectcount= this.allProjects.length; 
     this.projectService.findCompletedAll().subscribe(data2=>{
      this.compProject=data2;
      this.Completedcount=this.compProject.length;
      this.projectService.findOngoing().subscribe(data3=>{
        this.ongProject=data3;
        this.Ongoingcount=this.ongProject.length;
        this.check_card_data();
      });  
    }); 
     
    });
    

    
     
    }

    check_card_data() {
      switch (this.cardData) {
        case 'TotalCount':
         
          this.data = this.allPorjectcount;
          this.iconData = 'assessment';
          break;
        case 'CompletedCount':
         
          this.data =  this.Completedcount;
          this.iconData = 'assessment';
          break;
        case 'OngoingCount':
          this.data = this.Ongoingcount;
          this.iconData = 'assessment';
          break;
        default:
          this.data = 'data missing';
      }
    }
   
}
