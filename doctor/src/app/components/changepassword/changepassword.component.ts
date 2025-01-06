import { SecretaireserviceService } from 'src/app/services/secretaireservice.service';
import { DoctorsserviceService } from './../../services/doctorsservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ConfirmedValidator } from './confirmed.validators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  public Currentuseractive = JSON.parse(localStorage.getItem('currentuser'));
  changepass:FormGroup
  constructor(private fb:FormBuilder,private medecinservice:DoctorsserviceService , private secretaireservice:SecretaireserviceService) { }

  ngOnInit(): void {
    this.changepass = this.fb.group({
      password:['',Validators.required] ,
newpassword:['',Validators.required] ,
confirmpassword:['',Validators.required]
} ,
 {
  validator:ConfirmedValidator('newpassword','confirmpassword')
} )
  }
  get f (){
    return this.changepass.controls ;
  }
  updatepassword(){
    if(this.Currentuseractive['role'] === 'medecin'){

      if(  this.Currentuseractive.password==this.changepass.value.password && this.changepass.value.newpassword==this.changepass.value.confirmpassword )
      {

      this.changepass.value.password= this.changepass.value.newpassword ;

  this.medecinservice.updatemedecin(this.Currentuseractive.id,this.changepass.value).subscribe((data)=>{
    console.log("after changing password" , data );


  Swal.fire(
    'Good job!',
    'Your password has ben Updated!',
    'success'
  )

  })
  this.changepass.reset() ;
    }
     else {
       if ( this.changepass.value.newpassword!=this.changepass.value.confirmpassword ){
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
    else
    if(this.Currentuseractive['role'] === 'secretaire'){

      if(  this.Currentuseractive.password==this.changepass.value.password && this.changepass.value.newpassword==this.changepass.value.confirmpassword )
      {

      this.changepass.value.password= this.changepass.value.newpassword ;

  this.secretaireservice.updatesecretaire(this.Currentuseractive.id,this.changepass.value).subscribe((data)=>{
    console.log("after changing password" , data );


  Swal.fire(
    'Good job!',
    'Your password has ben Updated!',
    'success'
  )

  })
  this.changepass.reset() ;
    }
     else {
       if ( this.changepass.value.newpassword!=this.changepass.value.confirmpassword ){
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
}
