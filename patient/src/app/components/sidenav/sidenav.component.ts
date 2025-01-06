import { Router } from '@angular/router';
import { Ipatient } from './../../Models/patients';
import { PatientserviceService } from './../../services/patientservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
Patient : Ipatient ;
currentuser : Ipatient  ;
currentuseItem = localStorage.getItem('currentuser') ;
activeSideBar:string="rendezvous";
  constructor(private patientservice:PatientserviceService,private router:Router) {
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
  }
getpatientbyid(){
  this.patientservice.getbyid(this.currentuser.id).subscribe((data)=>{
    this.Patient= data ;
  })
}
  ngOnInit(): void {
    this.getpatientbyid() ;
  }
  change(selectSideBar:any){
    this.activeSideBar=selectSideBar;
  }
  logout() {
    //remove user from localStorage
    localStorage.removeItem('currentuser');
    localStorage.removeItem('status');
    this.router.navigateByUrl('');
  }

}
