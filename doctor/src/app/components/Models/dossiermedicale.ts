import { IDoctor } from './doctor';
import { Ipatient } from "./patient";

export interface IDossierMedicale{
 numdossier :number ;
   nompatient :String ;
  prenompatient:String ;
  dossierpatient : Ipatient ;
  MedDossier : IDoctor ;

}
