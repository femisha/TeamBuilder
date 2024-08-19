import { Component } from '@angular/core';
import { Team } from '../model/Team';
import { TeamService } from '../service/team.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private _teamService:TeamService, private http:HttpClient){}
  
  team: Team = new Team();


  constructTeam(){
    if (this.team.size != null) {

    this._teamService.buildTeam(this.team.size).subscribe((data)=>{
      console.log("Successfully built team");
   });

  }
}


}
