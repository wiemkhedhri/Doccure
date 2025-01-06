import { RendezvousserviceService } from './../../services/rendezvousservice.service';
import { Component, OnInit } from '@angular/core';
import { Ipatient } from 'src/app/Models/patients';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listeendezvous',
  templateUrl: './listeendezvous.component.html',
  styleUrls: ['./listeendezvous.component.css']
})
export class ListeendezvousComponent implements OnInit {
  listrendezvous: any ;
  currentuser : Ipatient  ;
currentuseItem = localStorage.getItem('currentuser') ;
  constructor(private rendezvouservice:RendezvousserviceService) {
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
  }

  ngOnInit(): void {
    this.getrendezvous() ;
  }
  getrendezvous(){
    this.rendezvouservice.getallrendezvousbypatient(this.currentuser.id).subscribe((data)=>{
  this.listrendezvous = data ;
  console.log(data ) ;
    })
  }
  supprimer(coderv:any){


    Swal.fire({
      title: 'Are you sure?',

      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.rendezvouservice.supprimer(coderv).subscribe((data)=>{
          this.getrendezvous() ;
          console.log("vrai ")
        })
        Swal.fire(
          'Deleted!',
          'Your Appointment has been deleted.',
          'success'
        )

      }
      this.getrendezvous() ;
    })


  }
}
