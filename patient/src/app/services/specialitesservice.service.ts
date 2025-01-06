import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISpecialites } from '../Models/specialites';

@Injectable({
  providedIn: 'root'
})
export class SpecialitesserviceService {

  constructor(private http:HttpClient) { }
  getall(){
    return this.http.get<ISpecialites[]>(`${environment.BasedUrl}/specialite/findall`) ;
  }
}
