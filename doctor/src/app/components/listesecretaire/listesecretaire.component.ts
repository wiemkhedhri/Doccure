import { SecretaireserviceService } from './../../services/secretaireservice.service';
import { ISecretaire } from './../Models/secretaire';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listesecretaire',
  templateUrl: './listesecretaire.component.html',
  styleUrls: ['./listesecretaire.component.css']
})
export class ListesecretaireComponent implements OnInit {
secrtaireliste:ISecretaire[] ;
currentuserid=localStorage.getItem('medecinid') ;
  constructor(private secretaireservice:SecretaireserviceService) { }

  ngOnInit(): void {
    window.scroll(0, 0)
    this.findallsecretaire() ;
  }
findallsecretaire(){
  console.log("here find secrt");

  this.secretaireservice.getallsecretaire(this.currentuserid).subscribe((data)=>{
    this.secrtaireliste =data ;
  })
}
supprimersecretaire(id:any){
  Swal.fire({
    title: 'Are you sure?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.secretaireservice.delete(id).subscribe((data)=>{
        this.findallsecretaire() ;
      })
      Swal.fire(
        'Deleted!',
        'Your secretary has been deleted.',
        'success'
      )
    }
  })
}
}
