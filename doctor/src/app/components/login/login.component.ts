import { LoginserviceService } from './../../services/loginservice.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  acteur:any ;
  LoginForm: FormGroup ;
  forgetpass:FormGroup ;
  constructor(private fb:FormBuilder  , private router:Router , private loginservice:LoginserviceService) { }

  ngOnInit(): void {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton?.addEventListener('click', () => {
      container?.classList.add("right-panel-active");
    });

    signInButton?.addEventListener('click', () => {
      container?.classList.remove("right-panel-active");
    });
       this.LoginForm= this.fb.group({
    email:['',Validators.required] ,
  password:['',Validators.required] ,
  })
  this.forgetpass= this.fb.group({
    email:['',Validators.required] ,
  })
  }
  login(){
    if(this.LoginForm.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your have to enter your email and your password!',

      })
      return ;
    } else {
      this.loginservice.login(this.LoginForm.value).subscribe((data)=>{
        this.acteur=data ;
          if(this.acteur.role=='medecin') {
            this.acteur=data ;
            localStorage.setItem('currentuser',JSON.stringify((this.acteur)) );
            localStorage.setItem('status','1') ;
            localStorage.setItem('medecinid',JSON.stringify((this.acteur.id)))
            this.router.navigateByUrl('/dashbord')
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Successfully entered ',
              showConfirmButton: false,
              timer: 1500
            })

          }
    else
     if (this.acteur.role=='secretaire'){
      this.acteur=data ;
     localStorage.setItem('currentuser',JSON.stringify((this.acteur))) ;
     localStorage.setItem('medecinid',JSON.stringify((this.acteur.medecin.id)))
     localStorage.setItem('status','1') ;
     this.router.navigateByUrl('/dashbord') ;
     Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Successfully entered ',
      showConfirmButton: false,
      timer: 1500
    })
    }
        } ,
        (error)=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your Email or your Password is Wrong!',

          })
        })



    }
     }
     confirmemail(){
       if (this.forgetpass.invalid){
         return ;
       }
       else {
         this.loginservice.chercheremail(this.forgetpass.value).subscribe((data)=>{
           this.loginservice.resetpassword(data).subscribe(()=>{
            Swal.fire(
              'Success!',
              'Check your email , we sended you your new password !',
              'success'
            )
           })
         },(error)=>{
          Swal.fire({
            icon: 'error',

            text: ' email does not exist !',

          })
         }
         )
       }
     }

}
