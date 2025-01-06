import { DossiermedicaleserviceService } from './../../services/dossiermedicaleservice.service';
import { PatientserviceService } from './../../services/patientservice.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allpatient',
  templateUrl: './allpatient.component.html',
  styleUrls: ['./allpatient.component.css']
})
export class AllpatientComponent implements OnInit {
  AddForm:FormGroup ;
  hiddentest: Boolean = false;
  allptients: any ;
  dossiermedicale : any;
  patient : any ;
  constructor(private patientservice:PatientserviceService,private fb:FormBuilder,private dossiermedicaleservice:DossiermedicaleserviceService) { }

  ngOnInit(): void {
    this.AddForm = this.fb.group({
      nomprenom: ['', Validators.required],
      datenaissance: ['', Validators.required],
      sexe: ['', Validators.required],
      numtel: ['', Validators.required],
      etatsociale: ['', Validators.required],
      adresse: ['', Validators.required],
      email: ['', Validators.required],
    });
    this.allpatient() ;
  }
  addpatient() {
    if (this.AddForm.invalid) {
      return;
    }
    else
    {
      this.dossiermedicale= {
        nomprenom : this.AddForm.value.nomprenom
      }

      this.patientservice.addpatient(this.AddForm.value).subscribe((data)=>{
        this.patient = data ;
        this.dossiermedicaleservice.adddossier(this.patient.id , this.dossiermedicale ).subscribe((data)=>{
console.log("this is dossier " , data ) ;
        })
this.allpatient() ;
this.hiddentest = false;

      })




    }
    this.scrollTo('header')
  }
  hiden() {
    this.hiddentest = true;
    this.scrollTo('page-wrapper');
  }
  allpatient(){
    this.patientservice.getallpatient().subscribe((data)=>{
      this.allptients = data  ;
    })
  }
  scrollTo(className: string):void {
    console.log("here scroll")
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }
  annuler(){
    this.hiddentest = false;
       this.scrollTo('header');
  }
}
