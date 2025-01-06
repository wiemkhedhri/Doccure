import { Router } from '@angular/router';
import { SecretaireserviceService } from './../../services/secretaireservice.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ISecretaire } from '../Models/secretaire';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addsecretary',
  templateUrl: './addsecretary.component.html',
  styleUrls: ['./addsecretary.component.css']
})
export class AddsecretaryComponent implements OnInit {
  AddForm:FormGroup ;
  secretaire:ISecretaire ;

  currentuserid = localStorage.getItem('medecinid') ;
  constructor(private fb:FormBuilder,private secretaireservice :SecretaireserviceService,private router:Router) { }

  ngOnInit(): void {
     this.AddForm = this.fb.group({
    nomprenom:['',Validators.required] ,
    sexe:['',Validators.required],
    datenaissance:['',Validators.required],
    etatsociale:['',Validators.required] ,
    numtel:['',Validators.required],
    adresse:['',Validators.required],
    email: ['',Validators.required],
    niveauetudes:['',Validators.required]

})
  }
  addsecretaire(){
    if (this.AddForm.invalid){
      return ;
    }
    else {

      this.secretaireservice.addsecretaire(this.AddForm.value,this.currentuserid).subscribe((data)=>{
     this.secretaire = data ;
Swal.fire(
  'success!',
  'Adedd Successffuly!',
  'success'
)
this.router.navigateByUrl('/listesecretaire')


    })

  }

  }

}
