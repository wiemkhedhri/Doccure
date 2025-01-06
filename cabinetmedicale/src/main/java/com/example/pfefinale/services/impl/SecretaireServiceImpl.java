package com.example.pfefinale.services.impl;

import com.example.pfefinale.models.Medecin;
import com.example.pfefinale.models.Secretaire;
import com.example.pfefinale.repositery.MedecinRepositery;
import com.example.pfefinale.repositery.SecretaireRepositery;
import com.example.pfefinale.services.interf.AdminService;
import com.example.pfefinale.services.interf.SecretaireService;
import com.example.pfefinale.utils.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class SecretaireServiceImpl implements SecretaireService {
    @Autowired
    private SecretaireRepositery secretaireRepositery ;
    @Autowired
    private ImageService imageService ;
    @Autowired
    private MedecinRepositery medecinRepositery ;
    public List<Secretaire> findall(){
        return secretaireRepositery.findAll();
    }
    public Secretaire Add(Secretaire secretaire  , Long id ) {
        secretaire.setPhoto("default.png");
        Medecin medecin = medecinRepositery.findById(id).orElse(null);
        secretaire.setMedecin(medecin);
        secretaire.setRole("secretaire");
        return secretaireRepositery.save(secretaire);

    }
    public Secretaire findbyId(Long id ) {
        return secretaireRepositery.findById(id).orElse(null);
    }
    public String delete(Long id) {
        Secretaire s = secretaireRepositery.findById(id).orElse(null);
        secretaireRepositery.delete(s);
        return "secretaire deleted...";
    }
    public Secretaire modifier(Secretaire secretaire , Long id ) {
        secretaire.setId(id);
        Secretaire oldsecretaire = secretaireRepositery.findById(id).orElse(null);
        secretaire.setNomprenom(secretaire.getNomprenom()==null? oldsecretaire.getNomprenom(): secretaire.getNomprenom());
        secretaire.setDatenaissance(secretaire.getDatenaissance()== null ? oldsecretaire.getDatenaissance(): secretaire.getDatenaissance());
        secretaire.setSexe(secretaire.getSexe()==null? oldsecretaire.getSexe() : secretaire.getSexe());
        secretaire.setEtatsociale(secretaire.getEtatsociale()==null? oldsecretaire.getEtatsociale(): secretaire.getEtatsociale());
        secretaire.setNumtel(secretaire.getNumtel()==null? oldsecretaire.getNumtel():secretaire.getNumtel());
        secretaire.setAdresse(secretaire.getAdresse()==null? oldsecretaire.getAdresse() : secretaire.getAdresse());
        secretaire.setEmail(secretaire.getEmail()==null? oldsecretaire.getEmail() :secretaire.getEmail());
        secretaire.setPassword(secretaire.getPassword()==null? oldsecretaire.getPassword() : secretaire.getPassword());
           secretaire.setPhoto(secretaire.getPhoto()==null? oldsecretaire.getPhoto() : secretaire.getPhoto());
        secretaire.setMedecin(secretaire.getMedecin()==null? oldsecretaire.getMedecin() : secretaire.getMedecin());
        secretaire.setRole(secretaire.getRole()==null?oldsecretaire.getRole() :secretaire.getRole());
        return secretaireRepositery.saveAndFlush(secretaire);
    }
}
