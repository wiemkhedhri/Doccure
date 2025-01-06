import { Component, OnInit } from '@angular/core';
import { RendezvousserviceService } from './../../services/rendezvousservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listerendezvous',
  templateUrl: './listerendezvous.component.html',
  styleUrls: ['./listerendezvous.component.css']
})
export class ListerendezvousComponent implements OnInit {
  listerendezvous: any;
  currentuser1: any = localStorage.getItem('currentuser');
  currentuservrai: any;
  idmedecin: any = localStorage.getItem('medecinid');
  upcomingg: any;
  rendezvoustoday: Date = new Date();
  listpatient: Boolean = true;
  listerendezvousbydate: any;

  constructor(private rendezvousservice: RendezvousserviceService) {
    // Parse the current user from localStorage
    this.currentuser1 = this.currentuser1 ? JSON.parse(this.currentuser1) : null;
  }

  ngOnInit(): void {
    this.upcoming(); // Fetch upcoming appointments
    this.today();    // Fetch today's appointments
  }

  upcoming(){
    this.rendezvousservice.getallrendezvousbymedecin(this.idmedecin).subscribe((data)=>{
      this.upcomingg = data
    })
  }
  // Fetch upcoming appointments
  // upcoming() {
  //   if (!this.idmedecin) {
  //     console.error("No medecin ID found in localStorage");
  //     return;
  //   }

  //   this.rendezvousservice.getallbydate(this.idmedecin).subscribe(
  //     (data) => {
  //       this.upcomingg = data;
  //       console.log("Liste des rendez-vous à venir:", this.upcomingg);
  //     },
  //     (error) => {
  //       console.error("Error fetching upcoming rendezvous:", error);
  //     }
  //   );
  // }

  // Fetch today's appointments
  today() {
    console.log("Fetching today's rendezvous...");

    let starttime = new Date();
    starttime.setHours(0, 0, 0);

    let endtime = new Date();
    endtime.setHours(23, 59, 59);

    let rv = {
      starttime: starttime.toISOString(),
      endtime: endtime.toISOString()
    };

    this.rendezvousservice.upcoming(this.idmedecin, rv).subscribe(
      (data) => {
        this.listerendezvousbydate = data;
        console.log("Rendez-vous pour aujourd'hui:", this.listerendezvousbydate);
      },
      (error) => {
        console.error("Error fetching today's rendezvous:", error);
      }
    );
  }

  // Accept a rendezvous
  accepter(id: any) {
    let rv = {
      patientvrai: this.listpatient
    };

    this.rendezvousservice.getbyud(id).subscribe(
      (data) => {
        console.log("Fetched rendezvous data:", data);

        this.rendezvousservice.modifierrb(id, rv).subscribe(
          (updatedData) => {
            console.log("Rendezvous updated successfully:", updatedData);
          },
          (error) => {
            console.error("Error updating rendezvous:", error);
          }
        );
      },
      (error) => {
        console.error("Error fetching rendezvous by ID:", error);
      }
    );
  }

  // Delete a rendezvous
  supprimer(coderv: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.rendezvousservice.supprimer(coderv).subscribe(
          (data) => {
            Swal.fire('Deleted!', 'The rendezvous has been deleted.', 'success');
            this.today(); // Refresh today's list
            this.upcoming(); // Refresh upcoming list
          },
          (error) => {
            console.error("Error deleting rendezvous:", error);
            Swal.fire('Error!', 'Unable to delete the rendezvous.', 'error');
          }
        );
      }
    });
  }
}
