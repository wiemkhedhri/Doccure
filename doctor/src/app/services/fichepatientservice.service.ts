import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FichepatientserviceService {

  constructor(private http:HttpClient) { }
  addfiche( fiche:any,iddossier:any ){
    return this.http.post(`${environment.BasedUrl}/fichepatient/create/${iddossier}`,fiche)
  }
  getbyid(id:any){
    return this.http.get(`${environment.BasedUrl}/fichepatient/getfichebypatient/${id}`)
  }
  updatefiche(id:any,fiche:any){
    return this.http.put(`${environment.BasedUrl}/fichepatient/modifier/${id}`,fiche)
  }
}
