import { ProjectMemberService } from './../../../services/projectmember.service';
import { Project } from 'src/app/models/project';
import { ProjectService } from '../../../services/project.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-smM',
  templateUrl: './card-smM.component.html',
  styleUrls: ['./card-smM.component.css']
})
export class CardSmMComponent implements OnInit {

  projectId = 1;
  project: Project;
  projectMemberCount: number;
  data: any;
  iconData: string;
  @Input()
  cardData: string;


  constructor(private projectService: ProjectService, private projectMemberService: ProjectMemberService) {
  }

  ngOnInit() {

    this.projectService.findById(this.projectId).subscribe(response => {
      this.project = response;
      this.getProjectMembers();
    });
  }

  getProjectMembers() {
    this.projectMemberService.getProjectMembers(this.projectId).subscribe(response => {
      this.projectMemberCount = response.length + 1;
      this.check_card_data();
    });
  }

  check_card_data() {
    switch (this.cardData) {
      case 'Start Date':
        const startDate = new Date(this.project.startDate);
        this.data = startDate.getDate().toString() + '/' + startDate.getMonth().toString() + '/' + startDate.getFullYear().toString();
        this.iconData = 'calendar_today';
        break;
      case 'Due Date':
        const dueDate = new Date(this.project.endDate);
        this.data = dueDate.getDate().toString() + '/' + dueDate.getMonth().toString() + '/' + dueDate.getFullYear().toString();
        this.iconData = 'calendar_today';
        break;
      case 'Budget':
        this.data = '$ ' + this.project.budget;
        this.iconData = 'attach_money';
        break;
      case 'Employees':
        this.data = this.projectMemberCount;
        this.iconData = 'people';
        break;
      default:
        this.data = 'data missing';
    }
  }

}