import { FicheconsulationserviceService } from './../../services/ficheconsulationservice.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-viewconsultation',
  templateUrl: './viewconsultation.component.html',
  styleUrls: ['./viewconsultation.component.css']
})
export class ViewconsultationComponent implements OnInit {
  numfiche: String = this.activatedRoute.snapshot.params['id'];
  ficheconsultation : any ;
  constructor(private activatedRoute: ActivatedRoute,private ficheconsultationservice:FicheconsulationserviceService) { }

  ngOnInit(): void {
this.getfichebyid() ;
  }
getfichebyid(){
  this.ficheconsultationservice.getfichebyid(this.numfiche).subscribe((data)=>{
this.ficheconsultation = data ;
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
