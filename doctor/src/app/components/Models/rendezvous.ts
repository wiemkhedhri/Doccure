import { Ipatient } from './patient';
import { IDoctor } from './doctor';
export interface Irendezvous{
  codedv:number ;
  nomprenom: String;
  starttime:Date ;
  endtime: Date ;
  description : String ;
  medecinrendezvous : IDoctor ;
  patientRV : Ipatient ;
}
