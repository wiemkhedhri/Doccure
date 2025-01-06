package com.example.pfefinale.services.impl;

import com.example.pfefinale.models.DossierMedicale;
import com.example.pfefinale.models.FicheConsultation;
import com.example.pfefinale.models.Medecin;
import com.example.pfefinale.repositery.DossierMedicaleRepositery;
import com.example.pfefinale.repositery.FicheConsultationRepositery;
import com.example.pfefinale.repositery.MedecinRepositery;
import com.example.pfefinale.services.interf.FicheConsultationService;
import com.example.pfefinale.utils.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class FicheConsultationImpl implements FicheConsultationService{
    @Autowired
    private FicheConsultationRepositery ficheConsultationRepositery ;
    @Autowired
    private MedecinRepositery medecinRepositery ;
    @Autowired
    private ImageService imageService ;

    @Autowired
    private DossierMedicaleRepositery dossierMedicaleRepositery ;

    public List<FicheConsultation> findall(){
        return ficheConsultationRepositery.findAll() ;
    }
    public FicheConsultation Add(FicheConsultation fiche , Long id_dossier , Long id_medecin){


        DossierMedicale dossierMedicale = dossierMedicaleRepositery.findById(id_dossier).orElse(null);
        fiche.setDossierMedicaleFC(dossierMedicale);
        Medecin medecin = medecinRepositery.findById(id_medecin).orElse(null);
        fiche.setMedFicheConsultation(medecin);
        return ficheConsultationRepositery.save(fiche) ;
    }
    public FicheConsultation findbyId(Long id ){
        return ficheConsultationRepositery.findById(id).orElse(null) ;
    }
    public String delete(Long id){
     FicheConsultation ficheConsultation=   ficheConsultationRepositery.findById(id).orElse(null) ;
     ficheConsultationRepositery.delete(ficheConsultation);
     return "fiche deleted ...";
    }
    public FicheConsultation modifier(FicheConsultation f , Long id){
        f.setNumfiche(id);
        FicheConsultation oldfiche = ficheConsultationRepositery.findById(id).orElse(null);
        f.setNomprenom(f.getNomprenom()==null? oldfiche.getNomprenom() : f.getNomprenom());
        f.setDateconsultation(f.getDateconsultation()==null?oldfiche.getDateconsultation():f.getDateconsultation());

        f.setDossierMedicaleFC(f.getDossierMedicaleFC()==null? oldfiche.getDossierMedicaleFC():f.getDossierMedicaleFC());
        f.setMedFicheConsultation(f.getMedFicheConsultation()==null? oldfiche.getMedFicheConsultation() : f.getMedFicheConsultation());
        f.setDescription(f.getDescription()==null?oldfiche.getDescription() : f.getDescription());
        return ficheConsultationRepositery.saveAndFlush(f) ;
    }

}
