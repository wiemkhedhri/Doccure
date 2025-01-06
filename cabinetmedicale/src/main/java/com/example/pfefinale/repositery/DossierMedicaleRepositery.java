package com.example.pfefinale.repositery;

import com.example.pfefinale.models.Acteur;
import com.example.pfefinale.models.DossierMedicale;
import com.example.pfefinale.models.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DossierMedicaleRepositery extends JpaRepository<DossierMedicale,Long> {
    @Query("SELECT doss FROM DossierMedicale doss where doss.patient.id = ?1 ")
    DossierMedicale chercherdossier( long id_patient);

}
