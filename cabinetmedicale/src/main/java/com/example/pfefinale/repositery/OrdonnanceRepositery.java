package com.example.pfefinale.repositery;


import com.example.pfefinale.models.Ordonnance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrdonnanceRepositery extends JpaRepository<Ordonnance,Long> {
    @Query("SELECT o FROM Ordonnance o where o.MedecinOrdonnance.id= ?1 ")
    List<Ordonnance> chercherordonnancebymedecin(long id_medecin);
    @Query("SELECT ordonnance FROM Ordonnance ordonnance where ordonnance.dossierMedicaleOrd.numdossier= ?1 ")
    List<Ordonnance> chercherbypatient(long numdossier);

}
