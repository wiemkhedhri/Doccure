import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }
  login(acteur:any){
    return this.http.post(`${environment.BasedUrl}/acteur/authentification`,acteur)
  }
  chercheremail(email: any) {
    return this.http.post(`${environment.BasedUrl}/acteur/confirmemail`, email);
  }
  resetpassword(user: any) {
    return this.http.post(
      `${environment.BasedUrl}/acteur/forgetPassword`,
      user
    );
  }
  updateimageuser(id : any , user:any ){
    return this.http.put(`${environment.BasedUrl}/acteur/updateimage/${id}`, user);
  }
}
