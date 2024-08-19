import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { TeamComponent } from './team/team.component';
import { RegisterService } from './service/register.service';
import { TeamService } from './service/team.service';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AdminComponent,
    TeamComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
    
  ],
  providers: [RegisterService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
