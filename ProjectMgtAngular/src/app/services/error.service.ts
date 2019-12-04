import { Injectable, ErrorHandler, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ErrorService implements ErrorHandler{
  constructor(private injector: Injector , public zone: NgZone) { }
  handleError(error: any) {
  const router = this.injector.get(Router);
   
   if (Error instanceof HttpErrorResponse) {
    console.log(error.status);
    //router.navigate(['errorpage']);
   }
   else {
    console.error("an error occurred here");
    //router.navigate(['errorpage']);
   }
   this.zone.run(() =>{router.navigate(['errorpage'])});
   }
 }