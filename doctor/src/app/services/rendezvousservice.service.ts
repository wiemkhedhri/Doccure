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
  getallrendezvousbymedecin(id:any){
    return  this.http.get(`${environment.BasedUrl}/rendezvous/findrendezvoubymedcin/${id}`) ;
  }
  getbyud(id:any){
    return  this.http.get(`${environment.BasedUrl}/rendezvous/findbyid/${id}`) ;
  }
  getallbydate(idmedecin:any){
    return  this.http.get(`${environment.BasedUrl}/rendezvous/rendezvousbydate/${idmedecin}`) ;
  }

  upcoming(id:any,renddezvous:any ){
    return  this.http.post(`${environment.BasedUrl}/rendezvous/upcoming/${id}`,renddezvous) ;
  }
  modifierrb(id:any,renddezvous:any ){
    return  this.http.put(`${environment.BasedUrl}/rendezvous/modifier/${id}`,renddezvous) ;
  }
  listpatient(id:any){
    return  this.http.get(`${environment.BasedUrl}/rendezvous/findlistpatient/${id}`) ;
  }
  supprimer(id:any){
    return  this.http.delete(`${environment.BasedUrl}/rendezvous/delete/${id}`) ;
   }
   

}
