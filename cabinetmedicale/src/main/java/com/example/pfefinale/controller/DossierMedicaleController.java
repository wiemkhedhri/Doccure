package com.example.pfefinale.controller;

import
        com.example.pfefinale.models.DossierMedicale;
import com.example.pfefinale.models.Patient;
import com.example.pfefinale.repositery.DossierMedicaleRepositery;
import com.example.pfefinale.services.interf.DossierMedicaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("*")
@RequestMapping("/dossiermedicale")
public class DossierMedicaleController {
    @Autowired
    private DossierMedicaleService dossierMedicaleService ;
    @Autowired
    private DossierMedicaleRepositery dossierMedicaleRepositery ;

    @PostMapping("/create/{id_patient}")
    public DossierMedicale add(  @PathVariable Long id_patient,@RequestBody DossierMedicale dossierMedicale){
        return dossierMedicaleService.Add(dossierMedicale , id_patient);
    }
    @GetMapping("/findall")
    public List<DossierMedicale> findall(){
        return dossierMedicaleService.findall() ;
    }
    @PutMapping("/modifier/{id}")
    public DossierMedicale modifier(@RequestBody DossierMedicale d , @PathVariable Long id ){
        return dossierMedicaleService.modifier(d, id) ;
    }
    @GetMapping("/findbyid/{id}")
    public DossierMedicale findbyid(@PathVariable Long id ){
        return dossierMedicaleService.findbyId(id);
    }
    @DeleteMapping("/delete/{id}")
    public String delete (@PathVariable Long id ){
        return dossierMedicaleService.delete(id) ;
    }

@GetMapping("/getdossierbypatient/{id_patient}")
    public DossierMedicale finddossier (@PathVariable Long id_patient){
        return dossierMedicaleRepositery.chercherdossier(id_patient) ;
}
}
