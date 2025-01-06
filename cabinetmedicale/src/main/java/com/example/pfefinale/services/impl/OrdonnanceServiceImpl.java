package com.example.pfefinale.services.impl;

import com.example.pfefinale.models.DossierMedicale;
import com.example.pfefinale.models.Medecin;
import com.example.pfefinale.models.Ordonnance;
import com.example.pfefinale.repositery.DossierMedicaleRepositery;
import com.example.pfefinale.repositery.MedecinRepositery;
import com.example.pfefinale.repositery.OrdonnanceRepositery;
import com.example.pfefinale.services.interf.OrdonnanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrdonnanceServiceImpl implements OrdonnanceService{
    @Autowired
    private OrdonnanceRepositery ordonnanceRepositery ;
    @Autowired
    private MedecinRepositery medecinRepositery ;
    @Autowired
    private DossierMedicaleRepositery dossierMedicaleRepositery ;

    public List<Ordonnance> findall(){
        return ordonnanceRepositery.findAll();
    }
    public Ordonnance Add(Ordonnance ordonnance , Long id_dossier , Long id_medecin) {
        DossierMedicale dossierMedicale = dossierMedicaleRepositery.findById(id_dossier).orElse(null);
        ordonnance.setDossierMedicaleOrd(dossierMedicale);
        Medecin medecin = medecinRepositery.findById(id_medecin).orElse(null) ;
        ordonnance.setMedecinOrdonnance(medecin);
        return ordonnanceRepositery.save(ordonnance) ;
    }
    public Ordonnance findbyId(Long id ) {
        return ordonnanceRepositery.findById(id).orElse(null);
    }
    public String delete(Long id) {
        Ordonnance o = ordonnanceRepositery.findById(id).orElse(null);
        ordonnanceRepositery.delete(o);
        return "ordonnance deleted.." ;
    }
    public Ordonnance modifier(Ordonnance o, Long id ) {
        o.setNumordonnance(id);
        Ordonnance oldordonnance = ordonnanceRepositery.findById(id).orElse(null) ;
      o.setNomprenom(o.getNomprenom()==null?oldordonnance.getNomprenom():o.getNomprenom());
        o.setDateordonnance(o.getDateordonnance()==null? oldordonnance.getDateordonnance() : o.getDateordonnance());
        o.setPrescription(o.getPrescription()==null? oldordonnance.getPrescription() : o.getPrescription());
        o.setMedecinOrdonnance(o.getMedecinOrdonnance()==null? oldordonnance.getMedecinOrdonnance() : o.getMedecinOrdonnance());
        o.setDossierMedicaleOrd(o.getDossierMedicaleOrd()==null? oldordonnance.getDossierMedicaleOrd() : o.getDossierMedicaleOrd());
        return ordonnanceRepositery.saveAndFlush(o);
    }
}
