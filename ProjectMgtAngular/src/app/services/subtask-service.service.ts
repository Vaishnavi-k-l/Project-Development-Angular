import { Subtask } from '../models/subtask';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

/*@Injectable({
  providedIn: 'root'
})*/

@Injectable()
export class SubtaskServiceService  
{

  private subtaskUrl: string;
  private updateUrl: string

  
  private empid : number= Number(sessionStorage.getItem('eid'));

 
  constructor(private http: HttpClient) 
  { 
      this.subtaskUrl = 'http://localhost:8050/employee-service/api/getsubtasks';
      this.updateUrl = 'http://localhost:8050/employee-service/api/updateProgress';
  }

  public findAll(): Observable<Subtask[]>
  {
    console.log(this.subtaskUrl+'/'+this.empid);
    return this.http.get<Subtask[]>(this.subtaskUrl+'/'+this.empid);
  }


  public updateProgress(id: number, progress:number, comment: string):Observable<Subtask>
  {
    const url = `${this.updateUrl}/${id}/${progress}/${comment}`;
    return this.http.put<Subtask>(url, progress);
  }

}
