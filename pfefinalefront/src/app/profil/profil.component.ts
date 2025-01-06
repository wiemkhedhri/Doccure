import { ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AdminserviceService } from './../Services/adminservice.service';
import { FormGroup, FormBuilder, Validators, NgControlStatus } from '@angular/forms';
import { IAdmin } from './../Models/admin';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ConfirmedValidator } from './confirmed.validator';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
currentuser : IAdmin  ;
currentuseItem = localStorage.getItem('currentuser') ;
updateform:FormGroup ;
utilisateuractuel :any ;
updateimage:FormGroup ;
fileToUpload:Array<File>=[] ;
newimages:any ;
updatepasword:FormGroup ;
oldpassword:any ;
  constructor(private fb:FormBuilder,private adminservice:AdminserviceService ,private router:Router) { }

  ngOnInit(): void {
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
this.updateform = this.fb.group( {
nomprenom:[''] ,
datenaissance:[''],
sexe:[''] ,
email:[''] ,
numtel:[''] ,
aboutme  :[''] ,
adresse :[''] ,
etatsociale:[''] ,
})
this.updateimage=this.fb.group({
  photo:['']
})
this.getbyid() ;

this.updatepasword = this.fb.group({
  password:['',Validators.required] ,
newpassword:['',Validators.required] ,
confirmpassword:['',Validators.required]
} ,
 {
  validator:ConfirmedValidator('newpassword','confirmpassword')
})
}

  get f (){
    return this.updatepasword.controls ;
  }
patchform(){
  this.updateform.patchValue({
    nomprenom : this.utilisateuractuel.nomprenom ,
    datenaissance : this.utilisateuractuel.datenaissance ,
    sexe : this.utilisateuractuel.sexe ,
    email : this.utilisateuractuel.email ,
    aboutme : this.utilisateuractuel.aboutme ,
    adresse : this.utilisateuractuel.adresse ,
    numtel : this.utilisateuractuel.numtel ,
    etatsociale: this.utilisateuractuel.etatsociale ,
  })
}

clickupdateprofil(){

  console.log("adresse",this.updateform.value.adresse)
  this.adminservice.update(this.currentuser.id , this.updateform.value).subscribe((res:any)=>{

    console.log("succes",res) ;
    Swal.fire(
      'You informations!',
      'updated with success',
      'success'
    )
    this.router.navigateByUrl['/home/profil']
    this.getbyid() ;

  })
}
getbyid(){
  return this.adminservice.getbyid(this.currentuser.id).subscribe((data)=>{
    this.utilisateuractuel = data ;
  })
}
updateimages(){
  let formData = new FormData() ;
  formData.append('file',this.fileToUpload[0])

this.adminservice.updateimages(this.currentuser.id,formData).subscribe((data)=>{


  localStorage.setItem("currentuser", JSON.stringify(data));
  this.utilisateuractuel= data ;
  Swal.fire(
    ' image Updated! ',
    'success'
  )
        window.location.reload()
})
}
handleFileInput(files: any) {
  this.fileToUpload = <Array<File>>files.target.files;
  console.log(this.fileToUpload)
}
updatepassword(){
  if(this.utilisateuractuel.password==this.updatepasword.value.password && this.updatepasword.value.newpassword==this.updatepasword.value.confirmpassword )
    {

    this.updatepasword.value.password= this.updatepasword.value.newpassword ;

this.adminservice.update(this.currentuser.id,this.updatepasword.value).subscribe((data)=>{
  console.log("after changing password" , data );


Swal.fire(
  'Good job!',
  'Your password has ben Updated!',
  'success'
)

})
this.updatepasword.reset() ;
  }
   else {
     if ( this.updatepasword.value.newpassword!=this.updatepasword.value.confirmpassword ){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your new password and confirm password does not match !',

      })
     } else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your Old password  IS Wrong !',

      })
     }


  }

   }



            }




