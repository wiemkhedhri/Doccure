package com.example.pfefinale.services.impl;

import com.example.pfefinale.models.DossierMedicale;
import com.example.pfefinale.models.Medecin;
import com.example.pfefinale.models.Patient;
import com.example.pfefinale.repositery.DossierMedicaleRepositery;
import com.example.pfefinale.repositery.MedecinRepositery;
import com.example.pfefinale.repositery.PatientRepositery;
import com.example.pfefinale.services.interf.DossierMedicaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DossierMedicaleServiceImpl implements DossierMedicaleService {

    @Autowired
    private DossierMedicaleRepositery dossierMedicaleRepositery ;
    @Autowired
    private MedecinRepositery medecinRepositery;
    @Autowired
    private PatientRepositery patientRepositery;


    public List<DossierMedicale> findall(){
        return dossierMedicaleRepositery.findAll() ;
    }

    public DossierMedicale Add( DossierMedicale dossierMedicale ,Long id_patient) {
       Patient p = patientRepositery.findById(id_patient).orElse(null) ;
       dossierMedicale.setPatient(p);
           return dossierMedicaleRepositery.save(dossierMedicale) ;
    }
    public DossierMedicale findbyId(Long id ) {
        return  dossierMedicaleRepositery.findById(id).orElse(null) ;
    }
    public String delete(Long id) {
        DossierMedicale dossierMedicale= dossierMedicaleRepositery.findById(id).orElse(null) ;
        dossierMedicaleRepositery.delete(dossierMedicale);
        return "dossier deleted..." ;
    }
    public DossierMedicale modifier(DossierMedicale dossierMedicale , Long id ){
        dossierMedicale.setNumdossier(id);
        DossierMedicale olddossier= dossierMedicaleRepositery.findById(id).orElse(null);
        dossierMedicale.setNomprenom(dossierMedicale.getNomprenom()==null? olddossier.getNomprenom() : dossierMedicale.getNomprenom());
       dossierMedicale.setPatient(dossierMedicale.getPatient()==null?olddossier.getPatient() : dossierMedicale.getPatient());
      dossierMedicale.setFicheConsultationList(dossierMedicale.getFicheConsultationList()==null?olddossier.getFicheConsultationList():dossierMedicale.getFicheConsultationList());
       dossierMedicale.setOrdonnanceList(dossierMedicale.getOrdonnanceList()==null?olddossier.getOrdonnanceList():dossierMedicale.getOrdonnanceList());
        return dossierMedicaleRepositery.saveAndFlush(dossierMedicale);
    }
}
