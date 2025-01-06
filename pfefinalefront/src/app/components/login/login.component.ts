import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminserviceService } from './../../Services/adminservice.service';


import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { IAdmin } from 'src/app/Models/admin';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
FormLogin: FormGroup ;

user:IAdmin;
submitted = false;
  constructor(private adminservice:AdminserviceService,private fb : FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.FormLogin= this.fb.group({
      email:['',Validators.required] ,
    password:['',Validators.required] ,
    })

  }
login(){


  if (this.FormLogin.invalid) {
    this.submitted=true;

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You have to write your email and your password!',
    })
    return;
  }
else
        {
  this.adminservice.login(this.FormLogin.value).subscribe(
  (admin:any)=>{
{
  this.user=admin;
  console.log("here user :",this.user)
  if( this.user.role=='admin') {
    localStorage.setItem('currentuser',JSON.stringify((admin))) ;
    localStorage.setItem('status','1')

   console.log("here login :",localStorage.getItem('status'))
  }
  this.router.navigateByUrl('/home')
  Swal.fire(
    'Succes!',
    'Log in Successfully !',
    'success'
  )
}

} , (error)=>{
  Swal.fire({
    icon: 'error',

    text: 'Your email or your password is wrong!',
  })
}
)

}



  }
}

