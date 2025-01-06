import { SpecialitesserviceService } from './../../services/specialitesservice.service';
import { Component, OnInit } from '@angular/core';
import { IDoctor } from 'src/app/Models/doctor';
import { ISpecialites } from 'src/app/Models/specialites';
import { DoctorsserviceService } from 'src/app/services/doctorsservice.service';

@Component({
  selector: 'app-listedoctors',
  templateUrl: './listedoctors.component.html',
  styleUrls: ['./listedoctors.component.css'],
})
export class ListedoctorsComponent implements OnInit {
  medecin: IDoctor[];
  specialite: ISpecialites[];
  term: string = '';
  state = localStorage.getItem('status');
  public currentuserstate: string = localStorage.getItem('status');
  public medecinList = [];
  constructor(
    private docservice: DoctorsserviceService,
    private specialiteservice: SpecialitesserviceService
  ) {}

  ngOnInit(): void {
    window.scroll(0, 0)
    this.getallmedecin();
    this.getallspecialites();
  }

  rechercheByspe(nom: any) {
    nom != 'all'
      ? (this.medecin = this.medecinList.filter((x: IDoctor) => {
          return x.specialite.specialites == nom;
        }))
      : this.getallmedecin();
  }

  getallmedecin() {
    return this.docservice.GetAllMedecin().subscribe((listedocter) => {
      this.medecin = listedocter;
      this.medecinList = listedocter;
    });
  }
  getallspecialites() {
    this.specialiteservice.getall().subscribe((data) => {
      this.specialite = data;
    });
  }
  // this.sexeDoctor = 'femelle'
}
