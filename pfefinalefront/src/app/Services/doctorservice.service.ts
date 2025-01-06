import { IDoctor } from './../Models/doctor';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {

  constructor(private http:HttpClient) { }
    GetAllMedecin(){
      return this.http.get<IDoctor[]>(`${environment.BasedUrl}/medecin/findall`);
   }
   add(medecin:any,id:number){
     return this.http.post(`${environment.BasedUrl}/medecin/create/${id}`,medecin) ;
   }
   delete(id:number){
     return this.http.delete<IDoctor>(`${environment.BasedUrl}/medecin/delete/${id}`) ;
   }
   getbyid(id:any){
    return this.http.get<IDoctor>(`${environment.BasedUrl}/medecin/findbyid/${id}`) ;
   }
   updatedoctor(medecin:IDoctor,id:any){
    return this.http.put(`${environment.BasedUrl}/medecin/modifier/${id}`,medecin)
  }

}
