import { SecretaireserviceService } from './../../services/secretaireservice.service';
import { IDoctor } from './../Models/doctor';
import { DoctorsserviceService } from './../../services/doctorsservice.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
user:any ;
public Currentuseractive = JSON.parse(localStorage.getItem('currentuser'));
  constructor(private router : Router , private docorservice:DoctorsserviceService,private secretaireservice:SecretaireserviceService) {


  }

  ngOnInit(): void {
this.getcurrentuserbyid() ;
  }
  logout() {
    //remove user from localStorage
    localStorage.removeItem('currentuser');
    this.router.navigateByUrl('');
  }
  getcurrentuserbyid(){
    if(this.Currentuseractive['role'] === 'medecin'){

      this.docorservice.getmedcinbyid(this.Currentuseractive.id).subscribe((data)=>{
        console.log('this is medecin ' , data)
this.user= data ;
            })

    }
    else
    if(this.Currentuseractive['role'] === 'secretaire'){


this.secretaireservice.getsecretairebyid(this.Currentuseractive.id).subscribe((data)=>{
  this.user = data ;
  console.log('this is sec ' , data)
})
    }

  }
}
