import { CalenderComponent } from './components/calender/calender.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToastAllModule } from '@syncfusion/ej2-angular-notifications';

import { DropDownButtonAllModule } from '@syncfusion/ej2-angular-splitbuttons';

import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { MaskedTextBoxModule, UploaderAllModule } from '@syncfusion/ej2-angular-inputs';

import { ToolbarAllModule, ContextMenuAllModule } from '@syncfusion/ej2-angular-navigations';

import { ButtonAllModule, CheckBoxAllModule, SwitchAllModule } from '@syncfusion/ej2-angular-buttons';

import { DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';

import { NumericTextBoxAllModule, TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { ToolbarComponent } from '@syncfusion/ej2-angular-navigations';
import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploaderModule  } from '@syncfusion/ej2-angular-inputs';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import {HttpClientModule} from '@angular/common/http';


import {  NgxSlickJsModule } from 'ngx-slickjs' ;
/********************** */
 import { DatePipe } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ListedoctorsComponent } from './components/listedoctors/listedoctors.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ListeendezvousComponent } from './components/listeendezvous/listeendezvous.component';
import { SearchdoctorPipe } from './pipes/searchdoctor.pipe';
import { ProfilesettingsComponent } from './components/profilesettings/profilesettings.component';
import { RegisterComponent } from './components/register/register.component';
import { HeadersigninComponent } from './components/headersignin/headersignin.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { DossiermedicaleComponent } from './components/dossiermedicale/dossiermedicale.component' ;

@NgModule({

  declarations: [
    AppComponent,
    CalenderComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ListedoctorsComponent,

    DashboardComponent,
    SidenavComponent,
    ListeendezvousComponent,
    SearchdoctorPipe,
    ProfilesettingsComponent,
    RegisterComponent,
    HeadersigninComponent,
    ChangepasswordComponent,
    ForgetpasswordComponent,
    DossiermedicaleComponent ,

  ],
  imports: [

    BrowserModule,
    AppRoutingModule ,


    ScheduleAllModule,
    RecurrenceEditorAllModule ,
    FormsModule ,
    ReactiveFormsModule ,
    NumericTextBoxAllModule  ,
    TextBoxAllModule ,   DatePickerAllModule ,
    TimePickerAllModule ,   DateTimePickerAllModule,
    DropDownButtonAllModule ,
    ToastAllModule ,  TreeViewModule ,
    DropDownListAllModule ,  MultiSelectAllModule ,  MaskedTextBoxModule ,
    UploaderAllModule ,  ToolbarAllModule ,
    ContextMenuAllModule , ButtonAllModule , CheckBoxAllModule , SwitchAllModule , UploaderModule ,HttpClientModule ,


  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA] ,
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
