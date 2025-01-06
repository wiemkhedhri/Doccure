import { AdminserviceService } from './../../Services/adminservice.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IAdmin } from 'src/app/Models/admin';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentuser : IAdmin  ;
  currentuseItem = localStorage.getItem('currentuser') ;
  status = localStorage.getItem('status')

admin:IAdmin ;
  constructor (private router:Router,private AdminserviceService: AdminserviceService) { }

  ngOnInit(): void {
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
this.getbyid() ;
  }
  getbyid(){
    this.AdminserviceService.getbyid(this.currentuser.id).subscribe((data)=>{
      this.admin = data ;
    })

  }
  logout() {
    //remove user from localStorage
    localStorage.removeItem('currentuser');

    localStorage.removeItem('status')
    console.log(  "stauts:",localStorage.getItem('status'))
    console.log("after logout : ",localStorage.getItem('currentuser'))

    this.router.navigateByUrl('');


  }
}
