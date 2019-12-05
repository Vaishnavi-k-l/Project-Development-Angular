import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';
@Component({
  selector: 'app-card-emp-layout',
  templateUrl: './card-emp-layout.component.html',
  styleUrls: ['./card-emp-layout.component.css']
})
export class CardEmpLayoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
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
