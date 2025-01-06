package com.example.pfefinale.services.impl;

import com.example.pfefinale.models.Acteur;
import com.example.pfefinale.repositery.ActeurRepositery;
import com.example.pfefinale.services.interf.ActeurService;
import com.example.pfefinale.utils.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActeurServiceImpl implements ActeurService {
    @Autowired
    private ActeurRepositery acteurRepositery ;
    @Autowired
    private ImageService imageService ;


    public List<Acteur> findallActeur(){
return  acteurRepositery.findAll()  ;
    }

    public Acteur Addacteur(Acteur a){
        return acteurRepositery.save(a);
    }
    public Acteur findbyId(Long id ){
        return  acteurRepositery.findById(id).orElse(null) ;
    }
    public String delete(Long id){
        Acteur a = acteurRepositery.findById(id).orElse(null) ;
         acteurRepositery.delete(a);
         return "Acteur deleted successfully " ;
    }
    public Acteur modifier(Acteur a , Long id ){
        a.setId(id);
        Acteur oldacteur =  acteurRepositery.findById(id).orElse(null);
        a.setNomprenom(a.getNomprenom()==null? oldacteur.getNomprenom(): a.getNomprenom());

        a.setDatenaissance(a.getDatenaissance()== null ? oldacteur.getDatenaissance(): a.getDatenaissance());
        a.setSexe(a.getSexe()==null? oldacteur.getSexe() : a.getSexe());
        a.setEtatsociale(a.getEtatsociale()==null? oldacteur.getEtatsociale(): a.getEtatsociale());
        a.setNumtel(a.getNumtel()==null? oldacteur.getNumtel():a.getNumtel());
        a.setAdresse(a.getAdresse()==null? oldacteur.getAdresse() : a.getAdresse());
        a.setEmail(a.getEmail()==null? oldacteur.getEmail() :a.getEmail());
        a.setPassword(a.getPassword()==null? oldacteur.getPassword() : a.getPassword());

      return  acteurRepositery.saveAndFlush(a);
    }
    public Acteur authentification (Acteur a ){

       this.acteurRepositery.authentification(a.getEmail() ,a.getPassword()) ;
        return  a ;

    }
    public ResponseEntity<Resource> getFile(String filename) {
        Resource file = imageService.loadFile(filename);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
                .body(file);
    }
}
