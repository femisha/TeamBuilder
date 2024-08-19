import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private _http: HttpClient) { }

  public buildTeam(size : number):Observable<any>{
    console.log("size: " +size)
    return this._http.get<any>("http://localhost:8080/api/v1/teambuilder/buildTeam/"+size); 
  }
}
