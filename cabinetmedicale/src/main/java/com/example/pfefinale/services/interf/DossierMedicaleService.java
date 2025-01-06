package com.example.pfefinale.services.interf;

import com.example.pfefinale.models.DossierMedicale;
import com.example.pfefinale.models.FicheConsultation;
import com.example.pfefinale.models.Medecin;
import com.example.pfefinale.models.Patient;

import java.util.List;

public interface DossierMedicaleService {
    public List<DossierMedicale> findall();

    public DossierMedicale Add( DossierMedicale dossierMedicale ,Long id_patient)  ;
    public DossierMedicale findbyId(Long id ) ;
    public String delete(Long id) ;
    public DossierMedicale modifier(DossierMedicale dossierMedicale , Long id ) ;
}
