import { ISpecialites } from './specialites';

export interface IDoctor{
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
 numcabinet: Number ;
     faculte :String;

 datedachat :String  ;
 specialite:ISpecialites ;
 typeapplication : String ;
 state :Boolean ;

}
