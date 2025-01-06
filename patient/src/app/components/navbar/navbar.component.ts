import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  activeSideBar:string="home";
  state = localStorage.getItem('status') ;
  constructor() { }

  ngOnInit(): void {
  }
  change(selectSideBar:any){
    this.activeSideBar=selectSideBar;
  }
}
