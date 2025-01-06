import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DossierserviceService } from 'src/app/services/dossierservice.service';
import { PatientserviceService } from 'src/app/services/patientservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  AddForm:FormGroup ;
  fileToUpload:Array<File> = [];
  dossiermediclale: any ;
  constructor(private fb:FormBuilder,private Patientservice:PatientserviceService,private router:Router,private dossierservice:DossierserviceService) { }

  ngOnInit(): void {
    window.scroll(0, 0)
    this.AddForm= this.fb.group({
      nomprenom:['',Validators.required] ,
      sexe:['',Validators.required],
      datenaissance:['',Validators.required],
      etatsociale:['',Validators.required] ,
      numtel:['',Validators.required],
      adresse:['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      photo:['',Validators.required],
     })
  }
  addpatient(){
    let formData = new FormData();
    formData.append("nomprenom", this.AddForm.value.nomprenom);
    formData.append("sexe", this.AddForm.value.sexe);
    formData.append("datenaissance", this.AddForm.value.datenaissance);
    formData.append("etatsociale", this.AddForm.value.etatsociale);
    formData.append("numtel", this.AddForm.value.numtel);
    formData.append("adresse", this.AddForm.value.adresse);
    formData.append("email", this.AddForm.value.email);
    formData.append("password", this.AddForm.value.password);
    formData.append("file", this.fileToUpload[0]);
this.dossiermediclale={
nomprenom:this.AddForm.value.nomprenom
}
    this.Patientservice.AddPatient(formData).subscribe((patient)=>{

      this.dossierservice.create(this.dossiermediclale,patient.id).subscribe((data1)=>{
console.log("this is data" , data1)
      })
      console.log(patient) ;

     this.router.navigate(['/login']) ;
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your Information has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    })
     }

  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }
}
