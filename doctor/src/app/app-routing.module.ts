import { AuthgardGuard } from './guards/authgard.guard';
import { AllpatientComponent } from './components/allpatient/allpatient.component';
import { ViewordonnanceComponent } from './components/viewordonnance/viewordonnance.component';
import { ViewconsultationComponent } from './components/viewconsultation/viewconsultation.component';
import { PatientfileComponent } from './components/patientfile/patientfile.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { DetaillepatientComponent } from './components/detaillepatient/detaillepatient.component';
import { ProfilesettingsComponent } from './components/profilesettings/profilesettings.component';
import { Acceuil1Component } from './components/acceuil1/acceuil1.component';
import { ListerendezvousComponent } from './components/listerendezvous/listerendezvous.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { CalenderComponent } from './components/calender/calender.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddsecretaryComponent } from './components/addsecretary/addsecretary.component';
import { ListesecretaireComponent } from './components/listesecretaire/listesecretaire.component';
import { ListpatientComponent } from './components/listpatient/listpatient.component';

const routes: Routes = [

  {path:'',component:LoginComponent} ,
  {path:'addsecretaire',component:AddsecretaryComponent,canActivate:[AuthgardGuard]} ,
  {path:'listesecretaire',component:ListesecretaireComponent,canActivate:[AuthgardGuard]} ,
  {path:'dashbord',component:DashboardComponent,canActivate:[AuthgardGuard],children:[
    {path:'',component:Acceuil1Component} ,
    {path:'calnder',component:CalenderComponent} ,
    {path:'calnder/:id',component:CalenderComponent} ,
    {path:'profilesettings',component:ProfilesettingsComponent} ,
    {path:'detaillepatient/:id',component:DetaillepatientComponent} ,
    {path:'changepassword',component:ChangepasswordComponent} ,
    {path:'listpatient/:id',component:ListpatientComponent} ,
    {path:'listpatient',component:ListpatientComponent} ,
    {path:'viewconsultation/:id' , component:ViewconsultationComponent} ,
    {path:'viewordonnance/:id',component:ViewordonnanceComponent} ,
    {path:'allpatients',component:AllpatientComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
