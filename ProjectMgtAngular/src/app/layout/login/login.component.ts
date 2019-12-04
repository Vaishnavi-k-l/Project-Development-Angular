import { Router } from "@angular/router";
import { ApiService } from "../../services/apiservice.service";
import { ServiceService } from '../../services/service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { identifierModuleUrl } from '@angular/compiler';
var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  title = 'Project Management';

  //errorval: boolean = false;
  //errormsg = "";


  loginForm: FormGroup;
  submitted = false;
  invalidLogin: boolean = false;
  allowSubmit: boolean = false;
  user: User;
  constructor(private router: Router, private apiService: ApiService, private service: ServiceService) {
    this.user = new User();
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      pswd: new FormControl('', [Validators.required]),
      captcha: new FormControl(null, Validators.required)


    });
  }

  ngOnInit() {
    (function () {
      'use strict';
      window.addEventListener('load', function () {
        // Get the forms we want to add validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();
    function capcha_filled() {
      this.allowSubmit = true;
    }
    function capcha_expired() {
      this.allowSubmit = false;
    }

    window.localStorage.removeItem('token');


  }
  get f() { return this.loginForm.controls; }

  onSubmit() {

    if (this.loginForm.invalid) {

      if (this.loginForm.controls.captcha.value === null) {
        //this.errorval = true;
        //this.errormsg = 
        alert("CAPTCHA NEEDS TO BE CHECKED.");
      }
      else {
        //this.errorval = false;
        //this.errormsg = "";
      }

      return;
    }
    const loginPayload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.pswd.value
    }
    this.apiService.login(loginPayload).subscribe(data => {

      if (data.status === 200) {
        window.localStorage.setItem('token', data.result.token);
        sessionStorage.setItem('usertype', data.result.username);
        sessionStorage.setItem('eid', data.result.userId);
   sessionStorage.setItem('username', loginPayload.username);
        console.log(data.result)
        this.router.navigate(['side-nav']);
      }
      else if (data.status === 201) {
         sessionStorage.setItem('usertype', data.result.username);
        window.localStorage.setItem('token', data.result.token);
        sessionStorage.setItem('username', loginPayload.username);
        sessionStorage.setItem('eid',data.result.employeeId);
        console.log("employee");
       // console.log(data.result.employeeId);
        this.router.navigate(['agreedoc']);

      }
      else if (data.status === 202) {
         sessionStorage.setItem('usertype', data.result.username);
        window.localStorage.setItem('token', data.result.token);
        sessionStorage.setItem('token', data.result.token);
        sessionStorage.setItem('username', loginPayload.username);
        sessionStorage.setItem('eid',data.result.employeeId);
        // // console.log(data.result.employeeId);
        // console.log("manager");
        // this.service.check(loginPayload).subscribe(data => {
        //   if (data.status === 200) {
        this.router.navigate(['agreedoc']);
        //   }
        //   else {
        //     console.log("ian here");
        //     this.router.navigate(['agreedoc'])
        //   }


        // });

      }
      else if (data.status === 402) {
        this.invalidLogin = true;
        alert("Invalid username and password");
      }
      else {

      }
    });
  }
  sendmail(value) {
    console.log(value);
    const userpayload = {
      username: value
    }
    this.apiService.sendMail(userpayload).subscribe(data => {
      if (data == true) {
        console.log("Mail sent");
        alert("Credentials has been sent to your registered mail id");

      }
      else {
        alert("Please enter valid credentials ");
      }
    })
  }

}
