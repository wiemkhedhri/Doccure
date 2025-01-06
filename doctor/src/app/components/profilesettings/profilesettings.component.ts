import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DoctorsserviceService } from 'src/app/services/doctorsservice.service';
import { SecretaireserviceService } from 'src/app/services/secretaireservice.service';
import Swal from 'sweetalert2';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-profilesettings',
  templateUrl: './profilesettings.component.html',
  styleUrls: ['./profilesettings.component.css'],
})
export class ProfilesettingsComponent implements OnInit {
public medecin  : any ;
  public userProfile = JSON.parse(localStorage.getItem('currentuser'));
  Updateform:FormGroup ;
secretaire:any ;
updateimage : FormGroup ;
fileToUpload:Array<File>=[] ;
  constructor(private medecinservice:DoctorsserviceService,private fb:FormBuilder,private secrtaireservice:SecretaireserviceService,private userservice:LoginserviceService) {}

  ngOnInit(): void {
    this.Updateform = this.fb.group({
      nomprenom :['',Validators.required]  ,
      email:['',Validators.required] ,
      sexe:['',Validators.required] ,
      datenaissance :['',Validators.required] ,
      etatsociale:['',Validators.required] ,
      adresse:['',Validators.required],
      numtel:['',Validators.required] ,
      numcabinet :[''] ,
      faculte:[''] ,
      cnam:[''] ,
      prix:['']
    })
    this.updateimage = this.fb.group({
      photo:[''] ,
    })
    this.getuserbyid() ;

  }
  getuserbyid(){
    if (this.userProfile['role'] === 'medecin') {
      this.medecinservice.getmedcinbyid(this.userProfile.id).subscribe((data)=>{

        this.medecin = data ;
        this.patchmedecin(data) ;
            })

    }
    else
    if(this.userProfile['role'] === 'secretaire')    {
this.secrtaireservice.getsecretairebyid(this.userProfile.id).subscribe((data)=>{

  this.patchsecretaireform(data) ;
this.secretaire= data ;
})

   }
  }
  patchmedecin(medecin:any){
    this.medecinservice.getmedcinbyid(this.userProfile.id).subscribe((data)=>{
      this.medecin = data ;
          })
          this.Updateform.patchValue({
            nomprenom:this.medecin.nomprenom ,
       sexe : this.medecin.sexe ,
       datenaissance : this.medecin.datenaissance  ,
       etatsociale: this.medecin.etatsociale ,
       numtel:this.medecin.numtel ,
       adresse :this.medecin.adresse ,
       email : this.medecin.email ,
       numcabinet :this.medecin.numcabinet,
       faculte:this.medecin.faculte,
       cnam: this.medecin.cnam,
       prix: this.medecin.prix
           })

  }
  patchsecretaireform(secretaire:any){
    this.Updateform.patchValue({
      nomprenom:secretaire.nomprenom ,
    sexe : secretaire.sexe ,
    datenaissance : secretaire.datenaissance  ,
    etatsociale: secretaire.etatsociale ,
    numtel:secretaire.numtel ,
    adresse :secretaire.adresse ,
    email : secretaire.email ,
    })
  }
updatuser(){
  if (this.userProfile['role'] === 'medecin') {
this.medecinservice.updatemedecin(this.userProfile.id , this.Updateform.value).subscribe((data)=>{

  Swal.fire(
    'Success!',
    'Information updated successfully !',
    'success'
  )
  this.getuserbyid ;
})

  }
  else
  {
this.secrtaireservice.updatesecretaire(this.userProfile.id , this.Updateform.value).subscribe(()=>{
  Swal.fire(
    'Success!',
    'Information updated successfully !',
    'success'
  )
  this.getuserbyid ;
})
 }
}
updateuserimage(){


  let formData = new FormData() ;
  formData.append('file',this.fileToUpload[0])
  if (this.userProfile['role'] === 'medecin') {
this.medecinservice.updatemedecinimage(this.userProfile.id , formData).subscribe((data)=>{
  Swal.fire(
    'Success!',
    'Image updated!',
    'success'
  )

        window.location.reload() ;
    localStorage.setItem('currentuser',JSON.stringify(data))
})

      }
      else
      {
this.secrtaireservice.updatesecretaireimage(this.userProfile.id,formData).subscribe((data)=>{
  Swal.fire(
    'Success!',
    'Image updated!',
    'success'
  )

        window.location.reload() ;
    localStorage.setItem('currentuser',JSON.stringify(data))
})
     }




this.userservice.updateimageuser(this.userProfile.id,formData).subscribe(()=>{
  Swal.fire(
    'Success!',
    'Image updated!',
    'success'
  )

        window.location.reload() ;
        this.getuserbyid() ;
})

}
handleFileInput(files: any) {
  this.fileToUpload = <Array<File>>files.target.files;
  console.log(this.fileToUpload) ;
  this.updateuserimage() ;
}
}
