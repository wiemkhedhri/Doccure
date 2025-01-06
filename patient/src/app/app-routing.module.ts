import { DossiermedicaleComponent } from './components/dossiermedicale/dossiermedicale.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { LoginguardGuard } from './guard/loginguard.guard';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfilesettingsComponent } from './components/profilesettings/profilesettings.component';
import { ListeendezvousComponent } from './components/listeendezvous/listeendezvous.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListedoctorsComponent } from './components/listedoctors/listedoctors.component';
import { HomeComponent } from './components/home/home.component';
import { CalenderComponent } from './components/calender/calender.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'calnder/:id',component:CalenderComponent} ,
  {path:'login',component:LoginComponent} ,
  {path:'',component:HomeComponent} ,
  {path:'register',component:RegisterComponent} ,
  {path:'listedoctors',component: ListedoctorsComponent} ,
  {path:'forgetpassword',component:ForgetpasswordComponent} ,
  {path:'dashboard',component: DashboardComponent ,canActivate:[LoginguardGuard], children:[
    {path:'',component:ListeendezvousComponent}  ,
    {path:'profilesettings',component:ProfilesettingsComponent}  ,
    {path:'changepassword',component:ChangepasswordComponent} ,
    {path:'dossiermedicale',component:DossiermedicaleComponent}
  ]} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
