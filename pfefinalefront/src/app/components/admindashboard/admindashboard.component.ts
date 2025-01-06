import { IDoctor } from './../../Models/doctor';
import { DoctorserviceService } from './../../Services/doctorservice.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'],
})
export class AdmindashboardComponent implements OnInit {
  medecinlist: IDoctor[];
  checkedstatus: any;
  medecin: IDoctor;
  medecinstatus: IDoctor;
  term: String ;
  constructor(public doctorsservice: DoctorserviceService) {}

  ngOnInit(): void {
    this.getall();
    console.log("this is term",this.term)
  }

  getall() {
    this.doctorsservice.GetAllMedecin().subscribe((data) => {
      this.medecinlist = data;
      console.log('medcin : ', this.medecinlist);
    });
  }
  delete(id: number) {
    // this.deleteSpecialite=id;
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.doctorsservice.delete(id).subscribe(() => {
     this.getall();
        });
        Swal.fire('Deleted!', 'Your doctor has been deleted.', 'success');
        this.getall();
      }

    });
    this.getall();

  }
  getbyid(id) {
    this.doctorsservice.getbyid(id).subscribe((data) => {
      this.medecinstatus = data;
      console.log("user is :",this.medecinstatus)
    });
  }
 /* async */ statusdoctor(medcin: any) {


    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, !',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
         //await  this.getbyid(medcin.id);
          if (medcin.state == true) {
            medcin.state =false;
          } else{   medcin.state =true;}
            this.doctorsservice
              .updatedoctor(medcin, medcin.id)
              .subscribe((data) => {
                console.log('afterr update stauts', data);

              });



          swalWithBootstrapButtons.fire(


            'success' ,
            'success'

          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel

        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'You canceled' ,

          );
          this.getall();
        }
      });
  }
}
