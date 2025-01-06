import { LoginGuard } from './guard/login.guard';
import { AuthGuard } from './guard/auth.guard';

import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ProfilComponent } from './profil/profil.component';

import { AdddoctorComponent } from './components/adddoctor/adddoctor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SpecialitiesComponent } from './components/specialities/specialities.component';


const routes: Routes = [
  {path:'home',component:HomeComponent ,canActivate:[AuthGuard],children:[
    {path:'',component:AdmindashboardComponent } ,
    {path:'specialities',component:SpecialitiesComponent},
    {path:'adddoctor',component:AdddoctorComponent} ,
    {path:'profil',component:ProfilComponent},
  ]
},

{path:'forgetpassword',component:ForgetpasswordComponent} ,
{path:'',component:LoginComponent,canActivate:[LoginGuard]} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
