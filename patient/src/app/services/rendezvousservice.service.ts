import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RendezvousserviceService {

  constructor(private http:HttpClient) { }
  addrendezvous(rendezvous:any,idmedcin:any, idpatient:any){
   return this.http.post(`${environment.BasedUrl}/rendezvous/create/${idmedcin}/${idpatient}`,rendezvous) ;
  }
  getallrendezvou(){
   return  this.http.get(`${environment.BasedUrl}/rendezvous/findall`) ;
  }
  getallrendezvousbymedecin(id:any){
    return  this.http.get(`${environment.BasedUrl}/rendezvous/findrendezvoubymedcin/${id}`) ;
   }
   getallrendezvousbypatient(id:any){
    return  this.http.get(`${environment.BasedUrl}/rendezvous/findrendezvoubypatient/${id}`) ;
   }
   supprimer(id:any){
    return  this.http.delete(`${environment.BasedUrl}/rendezvous/delete/${id}`) ;
   }
}
