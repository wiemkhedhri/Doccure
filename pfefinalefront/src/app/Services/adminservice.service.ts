import { IAdmin } from './../Models/admin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminserviceService {
  constructor(private http: HttpClient) {}
  login(admin: any) {
    return this.http.post<IAdmin>(
      `${environment.BasedUrl}/acteur/authentification`,
      admin
    );
  }
  update(id: any, admin: any) {
    return this.http.put(`${environment.BasedUrl}/admin/modifier/${id}`, admin);
  }
  getbyid(id: any) {
    return this.http.get<IAdmin>(
      `${environment.BasedUrl}/admin/findbyid/${id}`
    );
  }
  updateimages(id: any, admin: any) {
    return this.http.put(
      `${environment.BasedUrl}/admin/updateimage/${id}`,
      admin
    );
  }
  getpasswordbyid(password: any) {
    return this.http.post(
      `${environment.BasedUrl}/acteur/confirmpassword`,
      password
    );
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
}
