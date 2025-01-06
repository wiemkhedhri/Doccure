import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchdoctor'
})
export class SearchdoctorPipe implements PipeTransform {


  transform(value:any,term:any ): any {
    console.log("value : ",value);
    console.log("term : ",term);


    if(term==null){
      return value;
    }else{
      return value.filter((item:any)=>(item.specialite.specialites.includes(term)));
    }
  }
  //value howa el tableau /term chaine de caratére /filter:like boucle  foreach

}
