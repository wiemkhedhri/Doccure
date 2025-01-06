import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public currentuserstate:string = localStorage.getItem("status") ;
  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0)
  }

}
