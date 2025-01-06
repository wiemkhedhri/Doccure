package com.example.pfefinale.controller;

import com.example.pfefinale.models.FicheConsultation;
import com.example.pfefinale.repositery.FicheConsultationRepositery;
import com.example.pfefinale.services.interf.FicheConsultationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/ficheconsultation")
public class FicheConsultationController {
    @Autowired
    private FicheConsultationService ficheConsultationService ;
    @Autowired
    private FicheConsultationRepositery ficheConsultationRepositery ;

    @GetMapping("/findall")
    public List<FicheConsultation> findall(){
        return ficheConsultationService.findall();
    }
    @GetMapping("/findbyid/{id}")
    public FicheConsultation findbyid(@PathVariable Long id){
      return  ficheConsultationService.findbyId(id);
    }
    @PostMapping("/create/{medecin_id}/{dossier_id}")
    public FicheConsultation create (@PathVariable Long medecin_id , @PathVariable Long dossier_id ,@RequestBody  FicheConsultation ficheConsultation){
        return ficheConsultationService.Add(ficheConsultation,dossier_id,medecin_id) ;
    }
    @DeleteMapping("/delete/{id}")
    public String delte(@PathVariable Long id){
        return ficheConsultationService.delete(id);
    }
    @PutMapping("/modifier/{id}")
    public FicheConsultation modifier (@RequestBody FicheConsultation ficheConsultation , @PathVariable Long id){
        return  ficheConsultationService.modifier(ficheConsultation , id);
    }
@GetMapping("/getfichebymedecin/{id_medecin}")
    public List<FicheConsultation> getalfichebymdecin(@PathVariable Long id_medecin){
        return ficheConsultationRepositery.chercherficheBymedecin(id_medecin) ;
}
    @GetMapping("/getbypatient/{numdossier}")
    public List<FicheConsultation> getallbypatient(@PathVariable Long numdossier){
        return ficheConsultationRepositery.chercherbypatient(numdossier) ;
    }


}
