package com.example.pfefinale.controller;

import com.example.pfefinale.models.Ordonnance;
import com.example.pfefinale.repositery.OrdonnanceRepositery;
import com.example.pfefinale.services.interf.OrdonnanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/ordonnance")
public class OrdonnanceController {
    @Autowired
    private OrdonnanceService ordonnanceService ;
    @Autowired
    private OrdonnanceRepositery ordonnanceRepositery ;
    @GetMapping("/findall")
    public List<Ordonnance> findall(){
        return  ordonnanceService.findall() ;
    }
    @GetMapping("/findbyid/{id}")
    public Ordonnance findbyid(@PathVariable Long id ){
        return ordonnanceService.findbyId(id) ;
    }
    @DeleteMapping("/delete/{id}")
    public String delete (@PathVariable Long id){
        return ordonnanceService.delete(id);
    }
    @PostMapping("/create/{id_medecin}/{id_dossier}")
    public Ordonnance create (@PathVariable Long id_medecin , @PathVariable Long id_dossier , @RequestBody Ordonnance ordonnance ){
        return ordonnanceService.Add(ordonnance,id_dossier,id_medecin) ;
    }
    @PutMapping("/modifier/{id}")
    public Ordonnance modifier(@PathVariable Long id , @RequestBody Ordonnance ordonnance){
        return ordonnanceService.modifier(ordonnance , id) ;
    }
    @GetMapping("/getBymedecin/{id_medecin}")
    public List<Ordonnance> getallbymedecin (@PathVariable Long id_medecin ) {
        return ordonnanceRepositery.chercherordonnancebymedecin(id_medecin) ;
    }
    @GetMapping("/getbypatient/{id_patient}")
    public List<Ordonnance> getbypatient (@PathVariable Long id_patient ) {
        return ordonnanceRepositery.chercherbypatient(id_patient) ;
    }
}
