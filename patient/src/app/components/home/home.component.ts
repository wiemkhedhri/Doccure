import { Ipatient } from './../../Models/patients';
import { DoctorsserviceService } from './../../services/doctorsservice.service';
import { SpecialitesserviceService } from './../../services/specialitesservice.service';
import { Component, OnInit } from '@angular/core';
import { ISpecialites } from 'src/app/Models/specialites';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listspecialite:ISpecialites[] ;
  listdoctors : any ;
  currentuser : Ipatient  ;
currentuseItem = localStorage.getItem('currentuser') ;
public currentuserstate:string = localStorage.getItem("status") ;
state = localStorage.getItem('status') ;
  constructor(private specialiteservice:SpecialitesserviceService,private doctorsservice: DoctorsserviceService) {   }

  ngOnInit(): void {

    this.getallspecialite() ;
    this.getalldoctors() ;
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
  }
  getalldoctors(){
    this.doctorsservice.oldestdoctor().subscribe((listdoct)=>{
      this.listdoctors=listdoct  ;
    })
  }

  // public initLS(){

  //   this.currentuserstate =  localStorage.getItem("state") ;

  //   console.log("this is current state ", this.currentuserstate) ;

  // }

  getallspecialite(){
    this.specialiteservice.getall().subscribe((listspec)=>{
       this.listspecialite=listspec ;
    })
  }




}
