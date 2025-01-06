package com.example.pfefinale.repositery;

import com.example.pfefinale.models.FicheConsultation;
import com.example.pfefinale.models.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FicheConsultationRepositery extends JpaRepository<FicheConsultation,Long> {
    @Query("SELECT fiche FROM FicheConsultation fiche where fiche.MedFicheConsultation.id= ?1 ")
    List<FicheConsultation> chercherficheBymedecin(long id_medecin);
    @Query("SELECT fiche FROM FicheConsultation fiche where fiche.dossierMedicaleFC.numdossier= ?1 ")
    List<FicheConsultation> chercherbypatient(long numdossier);

}
