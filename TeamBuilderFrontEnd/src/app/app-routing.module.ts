import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  {path:'signup',component:RegisterComponent},
  {path:'admin',component:AdminComponent},
  {path:'team',component:TeamComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
