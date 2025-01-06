import { RendezvousserviceService } from './../../services/rendezvousservice.service';
import { FichepatientserviceService } from './../../services/fichepatientservice.service';
import { DossiermedicaleserviceService } from './../../services/dossiermedicaleservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatientserviceService } from './../../services/patientservice.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listpatient',
  templateUrl: './listpatient.component.html',
  styleUrls: ['./listpatient.component.css'],
})
export class ListpatientComponent implements OnInit {
  medecinid = localStorage.getItem('medecinid');
  listpatient: any;
  AddForm: FormGroup;
  hiddentest: Boolean = false;
  patient: any;

  public Currentuseractive = JSON.parse(localStorage.getItem('currentuser'));
  constructor(
    private patientservice: PatientserviceService,
    private fb: FormBuilder,
    private dossierservice: DossiermedicaleserviceService , private rendezvousservice:RendezvousserviceService
  ) {}

  ngOnInit(): void {


    this.getallpatient() ;
  }
  getallpatient() {
this.rendezvousservice.listpatient(this.medecinid).subscribe((data)=>{
this.listpatient = data ;
})
  }

//   addpatient() {
//     if (this.AddForm.invalid) {
//       return;
//     }
//     else
//     {
//       console.log('this is formvalue', this.AddForm.value);
//       this.patientservice
//         .addpatientbymedecin(this.medecinid, this.AddForm.value)
//         .subscribe((data) => {
//           this.patient = data;
//           console.log('this is add');
//           this.getpatientbyid();
//           this.dossierform = { nomprenom: this.AddForm.value.nomprenom };
//           this.dossierservice
//             .adddossier(this.medecinid, this.patient.id, this.dossierform)
//             .subscribe((data) => {
//               this.dossiermedicale = data;
//               Swal.fire({
//                 position: 'top-end',
//                 icon: 'success',
//                 title: 'File has been Created ',
//                 showConfirmButton: false,
//                 timer: 1500,
//               });
// this.fichepatient = { nomprenom:this.patient.nomprenom, numtel:this.patient.numtel}
// this.Fichepatientservice.addfiche(this.fichepatient , this.dossiermedicale.numdossier)
//             });
//         });

//       this.hiddentest = false;
//       this.scrollTo('header');
//     }
//   }
  hiden() {
    this.hiddentest = true;
    this.scrollTo('page-wrapper');
  }
  scrollTo(className: string):void {
    console.log("here scroll")
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
