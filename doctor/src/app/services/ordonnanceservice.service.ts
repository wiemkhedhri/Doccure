import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdonnanceserviceService {

  constructor(private http:HttpClient) { }
  getbyidmedecin(id:any){
    return this.http.get(`${environment.BasedUrl}/ordonnance/getBymedecin/${id}`) ;
  }
  addordonnance(idmedecin:any,iddosssier:any , ord:any){
    return this.http.post(`${environment.BasedUrl}/ordonnance/create/${idmedecin}/${iddosssier}`,ord) ;
  }
  deleteordonnance(id:any){
    return this.http.delete(`${environment.BasedUrl}/ordonnance/delete/${id}`) ;
  }
  getordonnancebyid(id:any){
    return this.http.get(`${environment.BasedUrl}/ordonnance/findbyid/${id}`) ;
  }
}
