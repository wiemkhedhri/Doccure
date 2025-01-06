import { OrdonnanceserviceService } from './../../services/ordonnanceservice.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-viewordonnance',
  templateUrl: './viewordonnance.component.html',
  styleUrls: ['./viewordonnance.component.css']
})
export class ViewordonnanceComponent implements OnInit {
  numordonnance: String = this.activatedRoute.snapshot.params['id'];
  ordonnance : any ;
  constructor(private activatedRoute:ActivatedRoute,private ordonnanceservice:OrdonnanceserviceService) { }

  ngOnInit(): void {
    this.getordonnancebyid() ;
  }
getordonnancebyid(){
  this.ordonnanceservice.getordonnancebyid(this.numordonnance).subscribe((data)=>{
    this.ordonnance = data ;
  })
}
public openPDF(): void {
  let DATA: any = document.getElementById('htmlData');
  html2canvas(DATA).then((canvas) => {
    let fileWidth = 208;
    let fileHeight = (canvas.height * fileWidth) / canvas.width;
    const FILEURI = canvas.toDataURL('image/png');
    let PDF = new jsPDF('p', 'mm', 'a4');
    let position = 0;
    PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
    PDF.save('angular-demo.pdf');
  });
}
}
