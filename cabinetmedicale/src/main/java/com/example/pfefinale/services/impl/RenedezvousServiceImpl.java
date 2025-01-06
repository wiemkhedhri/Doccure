package com.example.pfefinale.services.impl;

import com.example.pfefinale.models.Medecin;
import com.example.pfefinale.models.Patient;
import com.example.pfefinale.models.RendezVous;
import com.example.pfefinale.repositery.MedecinRepositery;
import com.example.pfefinale.repositery.PatientRepositery;
import com.example.pfefinale.repositery.RendezvousRepositery;
import com.example.pfefinale.services.interf.RendezVousService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.Date;
import java.util.List;

@Service
public class RenedezvousServiceImpl implements RendezVousService{
    @Autowired
    private RendezvousRepositery rendezvousRepositery ;
@Autowired
private MedecinRepositery medecinRepositery ;
@Autowired
private PatientRepositery patientRepositery ;
    public List<RendezVous> findall(){
        return rendezvousRepositery.findAll() ;
    }

    public RendezVous Add(RendezVous rendezVous ,Long idmedecin , Long idpatient )
    {
        /*try {
            SimpleDateFormat dateParser = new SimpleDateFormat ("d MMMM dd yyyy hh:mm:ss "); //Format for input
            String date=rendezVous.getStarttime() ;
            java.util.Date dn = dateParser.parse(date); //Parsing the date
            SimpleDateFormat dateFormatter = new SimpleDateFormat ("d MMMM dd yyyy hh:mm:ss "); //Format for output
            rendezVous.setStarttime(dateFormatter.format(dn));  //Printing the date
            //enddaate
            SimpleDateFormat dateParser1 = new SimpleDateFormat ("d MMMM dd yyyy hh:mm:ss "); //Format for input
            String date1=rendezVous.getEndtime() ;
            java.util.Date dn1 = dateParser1.parse(date); //Parsing the date
            SimpleDateFormat dateFormatter = new SimpleDateFormat ("d MMMM dd yyyy hh:mm:ss "); //Format for output
            rendezVous.setStarttime(dateFormatter.format(dn));  //Printing the date

        } catch (Exception e){
            System.out.println("Erreur format");
        }*/
        Patient p = patientRepositery.findById(idpatient).orElse(null)  ;
        rendezVous.setPatientRV(p);

        Medecin m = medecinRepositery.findById(idmedecin).orElse(null) ;
        rendezVous.setMedecinrendezvous(m);
        System.out.println(m) ;
        return rendezvousRepositery.save(rendezVous);
    }
    public RendezVous findbyId(Long id ) {
        return rendezvousRepositery.findById(id).orElse(null);
    }
    public void delete(Long id) {
        RendezVous rendezVous = rendezvousRepositery.findById(id).orElse(null);
        rendezvousRepositery.delete(rendezVous);

    }
    public RendezVous modifier(RendezVous rv , Long id ) {
        rv.setCoderv(id);
        RendezVous oldrv = rendezvousRepositery.findById(id).orElse(null) ;
        rv.setNomprenom(rv.getNomprenom()==null? oldrv.getNomprenom() : rv.getNomprenom());

       rv.setStarttime(rv.getStarttime()==null?oldrv.getStarttime():rv.getStarttime());
       rv.setEndtime(rv.getEndtime()==null?oldrv.getEndtime(): rv.getEndtime());
       rv.setDescription(rv.getDescription()==null?oldrv.getDescription() : rv.getDescription());
       rv.setMedecinrendezvous(rv.getMedecinrendezvous()==null?oldrv.getMedecinrendezvous() : rv.getMedecinrendezvous());
       rv.setPatientRV(rv.getPatientRV()==null?oldrv.getPatientRV() : rv.getPatientRV());
       rv.setPatientvrai(rv.getPatientvrai()==null?oldrv.getPatientvrai() : rv.getPatientvrai());
        return rendezvousRepositery.saveAndFlush(rv);
    }
/*    public List<RendezVous> findallbypatientid(Long id){
        return    rendezvousRepositery.listerendezvous(id) ; }*/
}
