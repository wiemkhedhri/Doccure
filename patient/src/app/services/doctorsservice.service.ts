import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDoctor } from '../Models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorsserviceService {

  constructor(private http:HttpClient) { }
  GetAllMedecin(){
    return this.http.get<IDoctor[]>(`${environment.BasedUrl}/medecin/findall`);
 }
 getmedecinbyid(id:any){
   return this.http.get<IDoctor>(`${environment.BasedUrl}/medecin/findbyid/${id}`)
 }
 oldestdoctor(){
  return this.http.get<IDoctor>(`${environment.BasedUrl}/medecin/findthreemedecin`)
 }
}
