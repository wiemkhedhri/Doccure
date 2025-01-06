import { PatientserviceService } from 'src/app/services/patientservice.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Ipatient } from 'src/app/Models/patients';

@Component({
  selector: 'app-headersignin',
  templateUrl: './headersignin.component.html',
  styleUrls: ['./headersignin.component.css']
})
export class HeadersigninComponent implements OnInit {
  Patient : Ipatient ;
  currentuser : Ipatient  ;
  currentuseItem = localStorage.getItem('currentuser') ;
  constructor(private router:Router,private patientservice:PatientserviceService) { }

  ngOnInit(): void {
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
    this.getpatientbyid() ;
  }
  getpatientbyid(){
    this.patientservice.getbyid(this.currentuser.id).subscribe((data)=>{
      this.Patient= data ;
    })
  }
  logout() {
    //remove user from localStorage
    localStorage.removeItem('currentuser');
    localStorage.removeItem('status');
    this.router.navigateByUrl('');
  }
}
