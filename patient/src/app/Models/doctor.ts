import { ISpecialites } from './specialites';

export interface IDoctor{
  id : number ;
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
prixdonner :String ;
 datedachat :String  ;
 aboutme:String ;
 specialite : ISpecialites;
 cnam:String  ;

 prix : String ;

}
