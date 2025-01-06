import { PatientserviceService } from './../../services/patientservice.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ipatient } from 'src/app/Models/patients';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  user: Ipatient;
  public x = 0 ;
  constructor(
    private patientservice: PatientserviceService,
    private router: Router,
    private fb: FormBuilder) {}

  ngOnInit(): void {
    window.scroll(0, 0)
    this.loginform = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    if (this.loginform.invalid) {
      return;
    } else {
      this.patientservice.Login(this.loginform.value).subscribe((data) => {
        this.user = data;
        if (this.user.role == "patient"){
          localStorage.setItem('status', '1');
          localStorage.setItem('currentuser', JSON.stringify(this.user));
          this.router.navigateByUrl('listedoctors');
          Swal.fire(
            'Sign In!',
            'Successfully',
            'success'
          )
        }
      } ,
      (error)=>{
        Swal.fire({
          icon: 'error',
          title: 'Error.',
          text: 'Your email or your password is wrong!',

        })
      }
      );
    }

  }
}
