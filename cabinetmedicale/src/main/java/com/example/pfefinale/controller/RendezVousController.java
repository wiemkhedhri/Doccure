package com.example.pfefinale.controller;

import com.example.pfefinale.models.Patient;
import com.example.pfefinale.models.RendezVous;
import com.example.pfefinale.repositery.RendezvousRepositery;
import com.example.pfefinale.services.interf.RendezVousService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/rendezvous")
public class RendezVousController {
    @Autowired
    private RendezVousService rendezVousService ;
    @Autowired
    private RendezvousRepositery rendezvousRepositery  ;

    @GetMapping("/findall")
    public List<RendezVous> findall(){
        return rendezVousService.findall() ;
    }
    @GetMapping("/findbyid/{id}")
    public RendezVous findbyid(@PathVariable Long id ){
        return rendezVousService.findbyId(id) ;
    }
    @PostMapping("/create/{medecin_id}/{patient_id}")
    public RendezVous create(@RequestBody RendezVous rendezVous , @PathVariable Long medecin_id ,@PathVariable Long patient_id){
        System.out.println(rendezVous.getDescription());
        return rendezVousService.Add(rendezVous,medecin_id,patient_id) ;
    }
    @PutMapping("/modifier/{id}")
    public RendezVous modifier(@PathVariable Long id ,@RequestBody RendezVous rendezVous){
        return rendezVousService.modifier(rendezVous,id) ;
    }
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id ){
         rendezVousService.delete(id) ;
    }
    @GetMapping("/getdate")
    public void getdate(@RequestBody Date date){

    }
  @GetMapping("/findrendezvoubymedcin/{medcin_id}")
  public List<RendezVous> listeRVmedecin (@PathVariable Long medcin_id) {
      return rendezvousRepositery.listerendezvousmedecin(medcin_id) ;
  }
    @GetMapping("/findrendezvoubypatient/{patient_id}")
    public List<RendezVous> listeRVpatient(@PathVariable Long patient_id) {
        return rendezvousRepositery.listerendezvouspatient(patient_id) ;
    }
    @GetMapping("/patientbyrendezvous/{patient_id}")
    public Patient patientbyrv(@PathVariable Long patient_id) {
        return rendezvousRepositery.foundpatient(patient_id) ;
    }


    @GetMapping("/rendezvousbydate/{medecin_id}")
    public List<RendezVous> findrendezvoubydate (@PathVariable Long medecin_id){
     return  rendezvousRepositery.findrendezvousBydate(medecin_id) ;
    }


    @PostMapping("/upcoming/{medecin_id}")
    public List<RendezVous> findupcoming (@PathVariable Long medecin_id ,@RequestBody RendezVous date ){

        System.out.println("here rendez vous "+date.getStarttime());

        return  rendezvousRepositery.findupcoming(medecin_id , date.getStarttime(), date.getEndtime()) ;
    }
    @GetMapping("findlistpatient/{medecin_id}")
    public List<RendezVous> findliste (@PathVariable Long medecin_id){
        return rendezvousRepositery.findpatientmedecin(medecin_id) ;
    }
}
