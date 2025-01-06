package com.example.pfefinale.services.interf;

import com.example.pfefinale.models.Medecin;
import com.example.pfefinale.models.Secretaire;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface SecretaireService {
    public List<Secretaire> findall();
    public Secretaire Add(Secretaire secretair,Long id ) ;
    public Secretaire findbyId(Long id ) ;
    public String delete(Long id) ;
    public Secretaire modifier(Secretaire secretaire , Long id ) ;
}
