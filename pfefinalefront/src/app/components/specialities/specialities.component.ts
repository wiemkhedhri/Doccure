
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { SpecialiteserviceService } from 'src/app/Services/specialiteservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ISpecialites } from 'src/app/Models/specialites';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css'],
})
export class SpecialitiesComponent implements OnInit {
  specialite: ISpecialites[];
  form: FormGroup;
  updatespecialite: any;
  formupdate: FormGroup;
  fileToUpload: Array<File> = [];
  EditSpecialite: any;
  submitted=false;
  updatformimage:FormGroup ;
editimagespec:any ;
  constructor( private specialiteservice: SpecialiteserviceService, private fb: FormBuilder,  private router: Router ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      specialites: ['',Validators.required],
      photo: ['',Validators.required],

    });
    this.getallspecialites();
    this.formupdate = this.fb.group({
      specialites: ['',Validators.required],

    });
this.updatformimage = this.fb.group({
  photo:['']  ,
})
  }
  getallspecialites() {
    this.specialiteservice.getall().subscribe((data) => {
      this.specialite = data;
    });
  }

  deletespecialites(id: number) {
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
        this.specialiteservice.delete(id).subscribe(() => {
          console.log('delete ');
          this.getallspecialites();
        });
        Swal.fire('Deleted!', 'Your specialites has been deleted.', 'success');
        this.getallspecialites();
      }
    });
    this.getallspecialites();
  }
  addspecialiltes() {
    let formData = new FormData();
    formData.append('specialites', this.form.value.specialites);
    formData.append('file', this.fileToUpload[0]);
    if (this.form.invalid) {
      this.submitted=true;
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to enter the Specialite!',
      })
      return;
    } else {
      this.specialiteservice.add(formData).subscribe(() => {
        this.getallspecialites();
        this.form.patchValue({
          specialites: [''],
          photo: [''],
        })
      });
      Swal.fire('Added succeded!', 'success');
      this.getallspecialites();
      this.router.navigateByUrl('/home/specialities');
    }



  }

  handleFileInput(files: any) {

  this.fileToUpload = <Array<File>>files.target.files;
    // this.imgchecked = true ;
  }

  updateform(id: any) {

    this.EditSpecialite = id;
    console.log(this.EditSpecialite);
    this.getspecialitesbyid();
  }

  getspecialitesbyid() {
    this.specialiteservice.getbyid(this.EditSpecialite).subscribe((data) => {
      this.updatespecialite = data;

      this.formupdate.patchValue({

        specialites: this.updatespecialite.specialites,
      });

      console.log(data);
    });
  }
updateimage(){
  let formData = new FormData() ;
  formData.append('file',this.fileToUpload[0])

this.specialiteservice.updateimages(this.editimagespec,formData).subscribe((data)=>{

  Swal.fire(
    ' image Updated! ',
    'success'
  )
        window.location.reload()
})

}
  clickupdate() {
    if (this.formupdate.invalid) {
      this.submitted=true;
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to enter all the inputs!',
      })
      return;
    } else {
      this.specialiteservice.update(this.EditSpecialite, this.formupdate.value)
      .subscribe((data) => {
        console.log(data);
        // if(this.imgchecked==true)
        // {   this.updateimage() ;
        // }
this.formupdate.reset() ;
    Swal.fire(
      ' specialite Updated! ',
      'success'
    ) ;
     this.getallspecialites();
      });


    }


    }
updatimgform(id:any) {
this.editimagespec  = id ;
this.updateimage() ;
}

}
