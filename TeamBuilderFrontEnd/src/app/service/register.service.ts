import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Participant } from '../model/Participant';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http : HttpClient) { }

  public registerParticipant(participant : Participant):Observable<any>{
    return this._http.post<any>("http://localhost:8080/api/v1/teambuilder/participant",participant); 
  }
}
