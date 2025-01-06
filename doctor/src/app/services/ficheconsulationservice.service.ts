import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FicheconsulationserviceService {

  constructor(private http:HttpClient) { }
  getbyidmedecin(id:any){
    return this.http.get(`${environment.BasedUrl}/ficheconsultation/getfichebymedecin/${id}`) ;
  }
  addfiche(medecinid:any ,dossierid:any , fiche:any ){
    return this.http.post(`${environment.BasedUrl}/ficheconsultation/create/${medecinid}/${dossierid}`,fiche) ;
  }
  getfichebyid(id:any){
    return this.http.get(`${environment.BasedUrl}/ficheconsultation/findbyid/${id}`) ;
  }
  updatefiche(id:any , fiche:any ){
    return this.http.put(`${environment.BasedUrl}/ficheconsultation/modifier/${id}`,fiche) ;
  }
  deletefiche(id:any  ){
    return this.http.delete(`${environment.BasedUrl}/ficheconsultation/delete/${id}`) ;
  }
}
