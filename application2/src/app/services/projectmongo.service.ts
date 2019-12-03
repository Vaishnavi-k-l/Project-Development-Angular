import { Projectmongo } from '../models/projectmongo';
import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProjectMongoService {

  private projectMongoServiceUrl: string;

  constructor(private http: HttpClient) {
    this.projectMongoServiceUrl = 'http://localhost:9999/projectDesc/saveProjectDesc';
  }

  public save(projectmongo: Projectmongo) {
    return this.http.post<Projectmongo>(this.projectMongoServiceUrl, projectmongo);
  }
}