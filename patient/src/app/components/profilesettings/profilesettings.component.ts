import { PatientserviceService } from 'src/app/services/patientservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Ipatient } from 'src/app/Models/patients';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profilesettings',
  templateUrl: './profilesettings.component.html',
  styleUrls: ['./profilesettings.component.css']
})
export class ProfilesettingsComponent implements OnInit {
Updateform:FormGroup ;
Patient:Ipatient ;
currentuser : Ipatient  ;
currentuseItem = localStorage.getItem('currentuser') ;
updateimage:FormGroup ;
fileToUpload:Array<File>=[] ;
  constructor(private fb:FormBuilder,private patientservice:PatientserviceService) { }

  ngOnInit(): void {
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
this.Updateform = this.fb.group({
  nomprenom:['',Validators.required] ,
  sexe:['',Validators.required] ,
  datenaissance :['',Validators.required] ,
  etatsociale :['',Validators.required] ,
  numtel:['',Validators.required] ,
  adresse:['',Validators.required] ,
  email:['',Validators.required] ,
})
this.updateimage= this.fb.group({
  photo:['']
})
this.getbyid() ;
  }
  getbyid(){
    this.patientservice.getbyid(this.currentuser.id).subscribe((data)=>{
     this.patchform(data) ;
    })
  }
  patchform(patient:any){

    this.Updateform.patchValue({
nomprenom:patient.nomprenom ,
sexe : patient.sexe ,
datenaissance : patient.datenaissance  ,
etatsociale: patient.etatsociale ,
numtel:patient.numtel ,
adresse :patient.adresse ,
email : patient.email
    })
  }
  updatepatient(){
this.patientservice.updatepatient(this.currentuser.id , this.Updateform.value).subscribe((data)=>{
console.log("this is data " , data)
this.getbyid();
  Swal.fire(
    'You informations!',
    'updated with success',
    'success'
  )
})
  }
  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload) ;
    this.updatephoto() ;
  }

  updatephoto(){
    let formData = new FormData() ;
    formData.append('file',this.fileToUpload[0])

  this.patientservice.updateimagepatient(this.currentuser.id,formData).subscribe((data)=>{


    localStorage.setItem("currentuser", JSON.stringify(data));
    Swal.fire(
      'Success!',
      'Image updated!',
      'success'
    )

          window.location.reload() ;



  })
  }

}
