import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from "rxjs/index";
import {ApiResponse} from "../models/apiresponse";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
 

  login(loginPayload) : Observable<ApiResponse> {
   return this.http.post<ApiResponse>('http://localhost:7990/' + 'token/generate-token', loginPayload);
 // return this.http.post<ApiResponse>('http://localhost:8050/login-service/token/generate-token', loginPayload);
  }
  private mailingUrl: string;


 public sendMail(user)
{
    return this.http.post('http://localhost:7990/token/send-email', user);
  }
}