import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AdminsidenavComponent } from './components/adminsidenav/adminsidenav.component';
import { SpecialitiesComponent } from './components/specialities/specialities.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdddoctorComponent } from './components/adddoctor/adddoctor.component';
import { ProfilComponent } from './profil/profil.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { CommonModule } from '@angular/common';
import { RecherchePipe } from './pipes/recherche.pipe';







@NgModule({
  declarations: [
    AppComponent,
    AdmindashboardComponent,
    HomeComponent,
    AdminsidenavComponent,
    SpecialitiesComponent,
    HeaderComponent,
    LoginComponent,
    AdddoctorComponent,
    ProfilComponent,
    ForgetpasswordComponent,
    RecherchePipe,
 




  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule ,
    FormsModule ,
    ReactiveFormsModule,
CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
