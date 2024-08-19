import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { Participant } from '../model/Participant';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  participant:Participant=new Participant(); 

  constructor(private _regService:RegisterService, private http:HttpClient) { }


  ngOnInit(): void {  
  }

  fun()
 {
   alert("Registration successful, you will be receiving notification soon for team allocation")
 }

  registerParticipant(){
    this._regService.registerParticipant(this.participant).subscribe((data)=>{
       console.log("Successfully added");
    });

  } 


}
