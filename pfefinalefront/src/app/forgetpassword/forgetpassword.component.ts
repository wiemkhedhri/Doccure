import { AdminserviceService } from './../Services/adminservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
resetpass: FormGroup
  constructor(private fb:FormBuilder,private adminservice:AdminserviceService) { }

  ngOnInit(): void {
    this.resetpass = this.fb.group({
      email:['',Validators.required]
    })
  }
  resetpassword(){
if (this.resetpass.invalid){
  return  ;
}
else {
this.adminservice.chercheremail(this.resetpass.value).subscribe((data)=>{
this.adminservice.resetpassword(data).subscribe((res)=>{
  Swal.fire(
    'Success!',
    'Check your email , we sended you your new password !',
    'success'
  )
})
} ,
(error)=>{
  Swal.fire({
    icon: 'error',

    text: 'email does not exist!',

  })
}
)
}
  }
}
