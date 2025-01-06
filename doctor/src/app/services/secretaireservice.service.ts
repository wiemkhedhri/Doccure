import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISecretaire } from '../components/Models/secretaire';

@Injectable({
  providedIn: 'root'
})
export class SecretaireserviceService {

  constructor(private http:HttpClient) { }
  getsecretairebyid(id:any){
    return this.http.get(`${environment.BasedUrl}/secretaire/findbyid/${id}`)
  }
  addsecretaire(user:any,id:any){
    return this.http.post<ISecretaire>(`${environment.BasedUrl}/secretaire/create/${id}`,user)
  }
  getallsecretaire(id:any){
    return this.http.get<ISecretaire[]>(`${environment.BasedUrl}/secretaire/getallsecretairebymedeicn/${id}`)
  }
  delete(id:any){
    return this.http.delete<ISecretaire[]>(`${environment.BasedUrl}/secretaire/delete/${id}`)
  }
  updatesecretaire(id:any , secreataire:any ){
    return this.http.put(`${environment.BasedUrl}/secretaire/modifier/${id}`,secreataire)
  }
  updatesecretaireimage(id:any , secreataire:any ){
    return this.http.put(`${environment.BasedUrl}/secretaire/updateimage/${id}`,secreataire)
  }
}
