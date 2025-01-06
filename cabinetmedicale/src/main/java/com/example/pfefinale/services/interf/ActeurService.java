package com.example.pfefinale.services.interf;

import com.example.pfefinale.models.Acteur;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ActeurService {
    public List<Acteur> findallActeur();
    public Acteur Addacteur(Acteur a) ;
    public Acteur findbyId(Long id ) ;
    public String delete(Long id) ;
    public Acteur modifier(Acteur a , Long id ) ;
    public ResponseEntity<Resource> getFile(String filename) ;


}
