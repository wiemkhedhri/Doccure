package com.example.pfefinale.repositery;

import com.example.pfefinale.models.Acteur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ActeurRepositery extends JpaRepository<Acteur, Long> {
    @Query("SELECT auth FROM Acteur auth where auth.email = ?1 and auth.password = ?2 ")
    Acteur authentification(String email, String password);

    @Query("SELECT pass FROM Acteur pass where pass.password = ?1 ")
    Acteur cherchermotdepasse(String password);

    @Query("SELECT mail FROM Acteur mail where mail.email = ?1 ")
    Acteur chercheremail(String email);
}
