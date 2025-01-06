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



/********************** */
 import { DatePipe } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ListerendezvousComponent } from './components/listerendezvous/listerendezvous.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PourcentageComponent } from './components/pourcentage/pourcentage.component';
import { Acceuil1Component } from './components/acceuil1/acceuil1.component';
import { ProfilesettingsComponent } from './components/profilesettings/profilesettings.component';
import { DetaillepatientComponent } from './components/detaillepatient/detaillepatient.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { AddsecretaryComponent } from './components/addsecretary/addsecretary.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListesecretaireComponent } from './components/listesecretaire/listesecretaire.component';
import { PatientfileComponent } from './components/patientfile/patientfile.component';
import { ListpatientComponent } from './components/listpatient/listpatient.component';
import { ViewconsultationComponent } from './components/viewconsultation/viewconsultation.component';
import { ViewordonnanceComponent } from './components/viewordonnance/viewordonnance.component';
import { AllpatientComponent } from './components/allpatient/allpatient.component';
import { RechercherendezvousPipe } from './pipes/rechercherendezvous.pipe';
import { PatientrecherchePipe } from './pipes/patientrecherche.pipe' ;

@NgModule({

  declarations: [
    AppComponent,
    CalenderComponent,
    LoginComponent,
    ListerendezvousComponent,
    DashboardComponent,
    SidenavComponent,
    NavbarComponent,
    PourcentageComponent,
    Acceuil1Component,
    ProfilesettingsComponent,
    DetaillepatientComponent,
    ChangepasswordComponent,
    AddsecretaryComponent,
    FooterComponent,
    ListesecretaireComponent,
    PatientfileComponent,
    ListpatientComponent,
    ViewconsultationComponent,
    ViewordonnanceComponent,
    AllpatientComponent,
    RechercherendezvousPipe,
    PatientrecherchePipe ,

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
    ContextMenuAllModule , ButtonAllModule , CheckBoxAllModule , SwitchAllModule , UploaderModule ,HttpClientModule

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA] ,
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
