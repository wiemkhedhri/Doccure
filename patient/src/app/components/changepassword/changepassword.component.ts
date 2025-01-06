import { PatientserviceService } from 'src/app/services/patientservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ConfirmedValidator } from './confirmed.validator';
import Swal from 'sweetalert2';
import { Ipatient } from 'src/app/Models/patients';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
changepass:FormGroup ;
Patient : Ipatient ;
currentuser : Ipatient  ;
currentuseItem = localStorage.getItem('currentuser') ;
  constructor(private fb:FormBuilder,private patientservice:PatientserviceService) {
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
   }

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
    if(  this.currentuser.password==this.changepass.value.password && this.changepass.value.newpassword==this.changepass.value.confirmpassword )
      {

      this.changepass.value.password= this.changepass.value.newpassword ;

  this.patientservice.updatepatient(this.currentuser.id,this.changepass.value).subscribe((data)=>{
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
