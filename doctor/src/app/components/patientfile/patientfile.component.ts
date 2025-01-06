import { FormGroup, FormBuilder } from '@angular/forms';
import { FichepatientserviceService } from './../../services/fichepatientservice.service';
import { RendezvousserviceService } from 'src/app/services/rendezvousservice.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-patientfile',
  templateUrl: './patientfile.component.html',
  styleUrls: ['./patientfile.component.css']
})
export class PatientfileComponent implements OnInit {
  coderv:String=this.activatedRoute.snapshot.params['id'] ;
  Rendezvous : any ;
  fichepatient:any ;
  AddfichepatientForm:any ;
  constructor(private activatedRoute:ActivatedRoute,private rendezvousservice : RendezvousserviceService,private fichepatientservice:FichepatientserviceService,private fb:FormBuilder)  {

  }

  ngOnInit(): void {
    this.getrendezvousbyid() ;

  }
  getrendezvousbyid()
  {
  this.rendezvousservice.getbyud(this.coderv).subscribe((data)=>{
  this.Rendezvous = data ;
  this.getfichepatientbyid(this.Rendezvous.patientRV)
  console.log("this is id patient" ,this.Rendezvous.patientRV) ;
  })
  }
getfichepatientbyid(patient:any){
this.fichepatientservice.getbyid(patient.id).subscribe((data)=>{
this.fichepatient= data ;
console.log("this is getfice by id " , patient.id)
if(data==null){
this.AddfichepatientForm={
  nomprenom: patient.nomprenom  , datedenaissance : patient.datenaissance , sexe : patient.sexe , etatsociale : patient.etatsociale , numtel: patient.numtel, adresse :patient.adresse}
this.fichepatientservice.addfiche(this.AddfichepatientForm, patient.id).subscribe((fichepatient)=>{
  this.fichepatient = fichepatient  ;
  Swal.fire(
    'Success!',
    'File added successfully !',
    'success'
  )
})
}
else {
  Swal.fire(

    'File  Patient Alrady Exists !',
    'success'
  )
}
})
}
}
