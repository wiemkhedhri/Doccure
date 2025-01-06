package com.example.pfefinale.repositery;

import com.example.pfefinale.models.Medecin;
import com.example.pfefinale.models.Secretaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SecretaireRepositery  extends JpaRepository<Secretaire,Long>{
    @Query("SELECT m FROM Secretaire m where m.medecin.id = ?1 ")
    List<Secretaire> cherchersecretaire(Long medcin_id);
}
