package com.example.pfefinale.repositery;

import com.example.pfefinale.models.Acteur;
import com.example.pfefinale.models.Medecin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedecinRepositery extends JpaRepository<Medecin,Long> {
    @Query("SELECT mail FROM Medecin mail where mail.email = ?1 ")
    Medecin chercheremail( String email);
    @Query("SELECT m FROM Medecin m where m.sexe = ?1 and m.specialite = ?2 ")
   List<Medecin>  cherchermedecin(String sexe, String specialite);

    @Query(nativeQuery = true, value = "SELECT * FROM Medecin m  ORDER BY m.id ASC LIMIT 3")
    List<Medecin> findmedecinasc();
}
