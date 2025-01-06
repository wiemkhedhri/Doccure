import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDoctor } from '../components/Models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorsserviceService {

  constructor(private http:HttpClient) { }
  getmedcinbyid(id:any){
    return this.http.get<IDoctor>(`${environment.BasedUrl}/medecin/findbyid/${id}`)
  }
  updatemedecin(id:any , medecin:any){
    return this.http.put<IDoctor>(`${environment.BasedUrl}/medecin/modifier/${id}`,medecin)
  }
  updatemedecinimage(id:any , medecin:any){
    return this.http.put<IDoctor>(`${environment.BasedUrl}/medecin/updateimage/${id}`,medecin)
  }
}
