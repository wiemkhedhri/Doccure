import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ipatient } from '../components/Models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {

  constructor(private http:HttpClient) { }
  getbyid(id:any){
    return this.http.get<Ipatient>(`${environment.BasedUrl}/patient/findbyid/${id}`) ;
  }
  getbyidmedecin(id:any){
    return this.http.get<Ipatient>(`${environment.BasedUrl}/patient/findallbymedecin/${id}`) ;
  }
  addpatient(patient:any){
    return this.http.post(`${environment.BasedUrl}/patient/addbyplat`,patient) ;
  }
  getallpatient(){
    return this.http.get(`${environment.BasedUrl}/patient/findall`) ;
  }
}
