import { Router } from '@angular/router';
import { DoctorserviceService } from './../../Services/doctorservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SpecialiteserviceService } from 'src/app/Services/specialiteservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit {
form:FormGroup ;
specialite : any ;
submitted = false;
fileToUpload:Array<File> = [];
  constructor(private doctservice: DoctorserviceService,private specservice:SpecialiteserviceService,  private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nomprenom:['',Validators.required] ,
      sexe:['',Validators.required],
      numtel:['',Validators.required],
      adresse:['',Validators.required],
      email: ['',Validators.required],
      specialites:['',Validators.required] ,
      numcabinet :['',Validators.required] ,
     datedachat:['',Validators.required]})
  this.getall();

}

add(){
    if (this.form.invalid) {
      this.submitted=true;
      return;
    }
else
{
  this.doctservice.add(this.form.value,this.form.value.specialites).subscribe((data)=>{
    console.log(data);

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
     this.router.navigate(['/home']) ; }
    )
}

}

getall(){
  this.specservice.getall().subscribe((data)=>
  {
    this.specialite= data ;
    console.log(data)
   })
  }

}
