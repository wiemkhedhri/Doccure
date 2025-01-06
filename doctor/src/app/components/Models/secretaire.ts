import { IDoctor } from './doctor';
export interface ISecretaire{
  id:number ;
  nomprenom :String   ;
  datenaissance :String ;
   sexe :String;
 etatsociale :String ;
numtel :Number ;
adresse :String ;
 email : String  ;
  password :String ;
photo : String ;
aboutme : String ;
status : String;
profession:String ;
medecin : IDoctor ;

}
