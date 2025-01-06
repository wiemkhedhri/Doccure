import { FormGroup } from '@angular/forms';
export function ConfirmedValidator(controlName:string,matchingControlName:string){
  return(formGroup:FormGroup)=>{
const control = formGroup.controls[controlName] ;
const matchingcontrol = formGroup.controls[matchingControlName] ;
if(matchingcontrol.errors && !matchingcontrol.errors['confirmedValidator']){
  return
}if(control.value!== matchingcontrol.value){
  matchingcontrol.setErrors({confirmedValidator:true}) ;
}else {
  matchingcontrol.setErrors(null) ;
}
  }
}
