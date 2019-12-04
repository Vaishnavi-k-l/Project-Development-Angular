import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from "rxjs/index";
import {ApiResponse} from "../models/apiresponse";
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:7990/users/';

  check(loginPayload) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'agreement', loginPayload);
  }
}