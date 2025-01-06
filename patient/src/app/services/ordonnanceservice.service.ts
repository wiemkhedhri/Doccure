import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdonnanceserviceService {

  constructor(private http:HttpClient) { }
  getbypatient(id:any){
    return this.http.get(`${environment.BasedUrl}/ordonnance/getbypatient/${id}`);
  }
}
