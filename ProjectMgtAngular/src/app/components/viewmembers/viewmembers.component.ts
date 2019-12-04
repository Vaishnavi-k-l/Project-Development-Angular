import { ProjectMemberService } from './../../services/projectmember.service';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Projectmember } from 'src/app/models/projectmember';

@Component({
  selector: 'app-viewmembers',
  templateUrl: './viewmembers.component.html',
  styleUrls: ['./viewmembers.component.css']
})
export class ViewmembersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'username'];
  dataSource = new MatTableDataSource([]);
  projectId : number;
  projectMembers = new Array<Projectmember>();

  @ViewChild(MatSort, { static: false })
  sort: MatSort;

  constructor(private projectMemberService: ProjectMemberService) { }

  ngOnInit() {
    this.projectId = Number(sessionStorage.getItem('pid'));
    this.dataSource.sort = this.sort;

    this.projectMemberService.getProjectMembers(this.projectId).subscribe(response => {
      this.projectMembers = response;
      this.dataSource = new MatTableDataSource(this.projectMembers);
    });
  }

}