import { OrdonnanceserviceService } from './../../services/ordonnanceservice.service';
import { FicheconsulationserviceService } from './../../services/ficheconsulationservice.service';
import { DossiermedicaleserviceService } from './../../services/dossiermedicaleservice.service';
import { RendezvousserviceService } from 'src/app/services/rendezvousservice.service';
import { PatientserviceService } from './../../services/patientservice.service';
import { FormGroup, FormBuilder, Form, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-detaillepatient',
  templateUrl: './detaillepatient.component.html',
  styleUrls: ['./detaillepatient.component.css'],
})
export class DetaillepatientComponent implements OnInit {
  coderv: String = this.activatedRoute.snapshot.params['id'];
  Rendezvous: any;
  olddossiermedicale: any;
  fichepatient: any;
  AddfichepatientForm: any;
  addconsultationForm: FormGroup;
patchficheconsultation:any ;
  addficheconsultationtest: Boolean = false;
  dossiermedicale: any;
  listficheconsultation:any ;
  Patient: any;
  Medecinid = localStorage.getItem('medecinid');
updateconsultationform:FormGroup;
newconsulationfile:any ;
updateconsultationformtest:Boolean =false ;
allordonnance : any ;
editficheid:any ;
addordonnance:FormGroup ;
addprescriptiontest:Boolean = false ;
editordonnance:any ;
updateordonnance:FormGroup ;
ordonnancebyid: any ;
updateprescriptiontes:Boolean = false ;
  constructor(
    private activatedRoute: ActivatedRoute,
    private patientservice: PatientserviceService,
    private rendezvousservice: RendezvousserviceService,
    private fb: FormBuilder,
    private dossierservice: DossiermedicaleserviceService ,
    private ficheconsultationservice:FicheconsulationserviceService ,
    private orodonnanceservice:OrdonnanceserviceService
  ) {}

  ngOnInit(): void {
    this.addordonnance = this.fb.group({
      nomprenom:['',Validators.required] ,
      dateordonnance:['',Validators.required] ,
      prescription:['',Validators.required]
    })
    this.updateordonnance = this.fb.group({
      nomprenom:['',Validators.required] ,
      dateordonnance:['',Validators.required] ,
      prescription:['',Validators.required]
    })
    this.addconsultationForm = this.fb.group({
      nomprenom :['',Validators.required] ,
      dateconsultation :['',Validators.required] ,
      description :['',Validators.required] ,
    })
    this.updateconsultationform = this.fb.group({
      nomprenom:['',Validators.required] ,
      dateconsultation:['',Validators.required] ,
      description:['',Validators.required]
    })
    this.getrendezvousbyid();
    this.getallficheconsultation() ;
    this.getallordonnance() ;
  }
  getrendezvousbyid() {
    this.rendezvousservice.getbyud(this.coderv).subscribe((data) => {
      this.Rendezvous = data;

      this.Patient = this.Rendezvous.patientRV;
      console.log('this is id patient', this.Rendezvous.patientRV);
      this.getdossierbyid(this.Rendezvous.patientRV);
    });
  }

  getdossierbyid(patient: any) {
    this.dossierservice.getbyidpatient(patient.id).subscribe((data) => {
      this.dossiermedicale = data;


    });

  }
  getallficheconsultation() {
    this.ficheconsultationservice.getbyidmedecin(this.Medecinid).subscribe((data)=>{
this.listficheconsultation = data ;

    })

  }
  addficheconsultation() {
    this.scrollTo('test')
    if(this.addconsultationForm.invalid)
    {
      return ;
    }
    else {
      this.ficheconsultationservice.addfiche(this.Medecinid , this.dossiermedicale.numdossier , this.addconsultationForm.value).subscribe((data)=>{
     this.newconsulationfile = data ;
     this.scrollTo('header')
this.getallficheconsultation() ;
this.addficheconsultationtest = false ;
this.addconsultationForm.reset() ;

      })
    }

  }
  hiddentestficheconsultation(){
    this.addficheconsultationtest =true ;

  }
  scrollTo(className: string): void {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }
  annuler(){
    this.scrollTo('header') ;
    this.addprescriptiontest = false ;
    this.addficheconsultationtest = false ;
    this.updateconsultationformtest = false ;
    this.updateprescriptiontes = false ;
  }
  getallordonnance(){
this.orodonnanceservice.getbyidmedecin(this.Medecinid).subscribe((data)=>{
this.allordonnance = data ;
})
  }
  updateformconsultation(){
    this.scrollTo('test')
  this.updateconsultationformtest= true ;
  }
  patchvalue(id:any){
  this.editficheid = id ;
  this.getfichebyid() ;


  }

  getfichebyid()
{
  this.ficheconsultationservice.getfichebyid(this.editficheid).subscribe((data)=>{
   this.patchficheconsultation = data ;


this.updateconsultationform.patchValue({
  nomprenom:this.patchficheconsultation.nomprenom ,
  dateconsultation:this.patchficheconsultation.dateconsultation ,
  description : this.patchficheconsultation.description
})
  })
}
clickupdateconsultation(){
if (this.updateconsultationform.invalid){
  return ;
}
else {
this.ficheconsultationservice.updatefiche(this.editficheid ,this.updateconsultationform.value).subscribe((data)=>{
  this.scrollTo('header')
  this.getallficheconsultation() ;
  this.updateconsultationformtest = false ;
})

}
}
deleteficheconsultation(id:any){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.ficheconsultationservice.deletefiche(id).subscribe((data)=>{
        this.getallficheconsultation() ;
      })
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
    this.getallficheconsultation() ;
  })

}
clickaddordonnance(){
this.orodonnanceservice.addordonnance(this.Medecinid ,  this.dossiermedicale.numdossier , this.addordonnance.value).subscribe((data)=>{
  this.getallordonnance() ;
  this.addprescriptiontest= false ;


})
}
hiddentestordonnance(){
  this.addprescriptiontest =true ;

}
deleteordonnance(id:any){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.orodonnanceservice.deleteordonnance(id).subscribe((data)=>{
        this.getallordonnance() ;
      })
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
}
patchvalueordonnance(id){
this.editordonnance = id ;
this.getordonnancebyid() ;
this.updateprescriptiontes = true ;
}
getordonnancebyid(){
this.orodonnanceservice.getordonnancebyid(this.editordonnance).subscribe((data)=>{
  console.log("sataaa" , data )
this.ordonnancebyid = data
this.updateordonnance.patchValue({
  nomprenom:this.ordonnancebyid.nomprenom ,
  dateordonnance:this.ordonnancebyid.dateordonnance ,
  prescription:this.ordonnancebyid.prescription

})
})
}
}
