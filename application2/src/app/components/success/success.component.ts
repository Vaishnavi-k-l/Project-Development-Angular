import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  title = 'Project Management';
 
  ngOnInit() {
  
    let token=sessionStorage.getItem('token');
    let username=sessionStorage.getItem('username');
    // console.log(username);
    // console.log(token);
    
  }
  

}
