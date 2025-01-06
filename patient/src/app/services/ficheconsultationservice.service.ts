import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FicheconsultationserviceService {

  constructor(private http:HttpClient) { }
  getallbypatient (id:any){
    return this.http.get(`${environment.BasedUrl}/ficheconsultation/getbypatient/${id}`);
  }
}
