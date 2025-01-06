import { OrdonnanceserviceService } from './../../services/ordonnanceservice.service';
import { DossierserviceService } from 'src/app/services/dossierservice.service';
import { Component, OnInit } from '@angular/core';
import { Ipatient } from 'src/app/Models/patients';
import { FicheconsultationserviceService } from 'src/app/services/ficheconsultationservice.service';

@Component({
  selector: 'app-dossiermedicale',
  templateUrl: './dossiermedicale.component.html',
  styleUrls: ['./dossiermedicale.component.css']
})
export class DossiermedicaleComponent implements OnInit {
  currentuser : Ipatient  ;
currentuseItem = localStorage.getItem('currentuser') ;
dossiermedicale:any
listfiche:any ;
listordonnance:any  ;
  constructor(private dossiermedicaleservice:DossierserviceService ,private ficheconsultationservice:FicheconsultationserviceService , private ordonnanceservice:OrdonnanceserviceService) {
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
  }

  ngOnInit(): void {
    this.getdossierbyid() ;

  }
  getdossierbyid(){
    console.log("hhhhhhhhhh", this.currentuser.id) ;

    this.dossiermedicaleservice.getbyidpatient(this.currentuser.id).subscribe((data)=>{
this.dossiermedicale = data ;
console.log("data" , data) ;
this.getficheconsultation(this.dossiermedicale) ;
this.getordonnance(this.dossiermedicale)
    })

  }
getficheconsultation(dossier:any){
this.ficheconsultationservice.getallbypatient(dossier.numdossier).subscribe((data)=>{
this.listfiche = data ;
})
}
getordonnance(dossier:any){
this.ordonnanceservice.getbypatient(dossier.numdossier).subscribe((data)=>{
this.listordonnance = data ;
})
}
}
