import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DossierserviceService {

  constructor(private http:HttpClient) { }
  create(dossier:any,id:any){
    return this.http.post(`${environment.BasedUrl}/dossiermedicale/create/${id}`,dossier) ;
  }
  getbyidpatient(id:any){
    return this.http.get(`${environment.BasedUrl}/dossiermedicale/getdossierbypatient/${id}`) ;
  }
}
