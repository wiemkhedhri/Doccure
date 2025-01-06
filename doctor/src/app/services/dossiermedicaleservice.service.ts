import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DossiermedicaleserviceService {

  constructor(private http:HttpClient) { }
  getbyidpatient(id:any){
    return this.http.get(`${environment.BasedUrl}/dossiermedicale/getdossierbypatient/${id}`) ;
  }
  adddossier(idpatient: any , dossier:any){
    return this.http.post(`${environment.BasedUrl}/dossiermedicale/create/${idpatient}`,dossier) ;
  }
}
