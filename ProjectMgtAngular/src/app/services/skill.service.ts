import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Skills } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private skillURL : string;
  private results: Observable<Skills[]>;


  constructor(private http: HttpClient) {
    this.skillURL = 'http://localhost:8050/manager-service/skill/getAllSkills';
  }


  public findAll(): Observable<Skills[]> {

    return this.http.get<Skills[]>(this.skillURL);

  }
}