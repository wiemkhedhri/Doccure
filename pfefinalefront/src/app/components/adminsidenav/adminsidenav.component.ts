import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-adminsidenav',
  templateUrl: './adminsidenav.component.html',
  styleUrls: ['./adminsidenav.component.css']
})
export class AdminsidenavComponent implements OnInit {
displayauth:String ="none";
dashboard:string="active";
specialities:string="";
activeSideBar:string="dashbord";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  change(selectSideBar:string){
    this.activeSideBar=selectSideBar;
console.log("here change");

    // if(selectSideBar == "dashbord"){ this.router.navigateByUrl('/home')}
    // else {
    //   this.router.navigateByUrl('/home'+selectSideBar)
    // }


  }
display(){
  if(this.displayauth=="none"){
    this.displayauth="block" ;
  } else
  {
    this.displayauth="none"
  }

}
}
