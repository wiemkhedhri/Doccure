import { IDoctor } from './doctor';
export interface IFicheConsultation{
  numfiche:Number ;
    nompatient:String ;
    prenompatient:String ;
    dateconsultation:String ;
    description:String ;
    MedFicheConsultation: IDoctor ;

}
