package com.example.pfefinale.services.interf;

import com.example.pfefinale.models.Medecin;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface MedecinService {
    public List<Medecin> findallmedecin();
    public Medecin Add(Medecin m  , Long id ) ;
    public Medecin findbyId(Long id ) ;
    public String delete(Long id) ;
    public Medecin modifier(Medecin medecin , Long id ) ;
    public ResponseEntity<Resource> getFile(String filename) ;


}
