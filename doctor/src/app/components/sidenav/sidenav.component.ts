import { SecretaireserviceService } from './../../services/secretaireservice.service';
import { DoctorsserviceService } from './../../services/doctorsservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  currentusermedecin : any
  currentusersecretaire : any
  currentuser:any ;
  currentuseItem = localStorage.getItem('currentuser') ;
  currentuseractive : any ;
  activeSideBar:string="dashbord";
  constructor(private docorservice : DoctorsserviceService , private secretaireservice : SecretaireserviceService ) {    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
  }

  ngOnInit(): void {
    this.getcurrentuserbyid() ;
  }
  getcurrentuserbyid(){
    if(this.currentuser.role=='medecin'){
      this.currentusermedecin= this.currentuser ;7
      this.docorservice.getmedcinbyid(this.currentusermedecin.id).subscribe((data)=>{
this.currentuseractive= data ;
            })

    }
    else
    if(this.currentuser.role=='secretaire'){
      this.currentusersecretaire= this.currentuser ;
this.secretaireservice.getsecretairebyid(this.currentusersecretaire.id).subscribe((data)=>{
  this.currentuseractive = data ;
})
    }

  }
  change(selectSideBar:any){
    this.activeSideBar=selectSideBar;
  }
}
