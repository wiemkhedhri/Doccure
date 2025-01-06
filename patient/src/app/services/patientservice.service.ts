import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ipatient } from '../Models/patients';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {

  constructor(private http:HttpClient) { }
  AddPatient(patient:any){
    return this.http.post<Ipatient>(`${environment.BasedUrl}/patient/add`,patient) ;
  }
  Login(acteur:any){
    return this.http.post<Ipatient>(`${environment.BasedUrl}/acteur/authentification`,acteur) ;
  }
  getbyid(id:any){
    return this.http.get<Ipatient>(`${environment.BasedUrl}/patient/findbyid/${id}`) ;
  }
  chercheremail(email: any) {
    return this.http.post(`${environment.BasedUrl}/acteur/confirmemail`, email);
  }
  resetpassword(user: any) {
    return this.http.post(
      `${environment.BasedUrl}/acteur/forgetPassword`,
      user
    );
  }
  updatepatient(id:any,patient:any){
    return this.http.put<Ipatient>(`${environment.BasedUrl}/patient/modifier/${id}`, patient);
  }
  updateimagepatient(id : any , patient:any ){
    return this.http.put<Ipatient>(`${environment.BasedUrl}/acteur/updateimage/${id}`, patient);
  }
}
