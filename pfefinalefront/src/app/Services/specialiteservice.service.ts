
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISpecialites } from '../Models/specialites';

export interface Itest {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class SpecialiteserviceService {

  constructor(private http:HttpClient) { }
  getall() {
    return this.http.get<ISpecialites[]>(`${environment.BasedUrl}/specialite/findall`) ;
  }
  add(specialite:any){
    return this.http.post<ISpecialites>(`${environment.BasedUrl}/specialite/create`,specialite) ;
  }
  delete(id:Number){
    return this.http.delete<ISpecialites>(`${environment.BasedUrl}/specialite/delete/${id}`)
  }
  update(id:any,specialite:ISpecialites){
    return this.http.put<ISpecialites>(`${environment.BasedUrl}/specialite/modifier/${id}`,specialite)
  }
  getbyid(id:any){
    return this.http.get<ISpecialites>(`${environment.BasedUrl}/specialite/findbyid/${id}`)
  }
  updateimages(id:any,admin:any){
    return this.http.put(`${environment.BasedUrl}/specialite/updateimage/${id}`,admin)
  }
}
