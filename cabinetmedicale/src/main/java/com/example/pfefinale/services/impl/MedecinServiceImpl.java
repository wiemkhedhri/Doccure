package com.example.pfefinale.services.impl;

import com.example.pfefinale.models.Medecin;
import com.example.pfefinale.models.Specialite;
import com.example.pfefinale.repositery.MedecinRepositery;
import com.example.pfefinale.repositery.SpecialiteRepositery;
import com.example.pfefinale.services.interf.MedecinService;
import com.example.pfefinale.utils.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;
import java.util.Random;

@Service
public class MedecinServiceImpl implements MedecinService {
    @Autowired
       private MedecinRepositery medecinRepositery ;
      @Autowired
        private ImageService imageService;
      @Autowired
      private SpecialiteRepositery specialiteRepositery ;

    public List<Medecin> findallmedecin(){
        return medecinRepositery.findAll() ;
    }

    public Medecin Add(Medecin m, @PathVariable Long id ) {
        m.setPhoto("default.png");
        System.out.println("this is pass"+m.getPassword());
        Specialite s = specialiteRepositery.findById(id).orElse(null) ;
        m.setSpecialite(s);
        m.setRole("medecin");
        return medecinRepositery.save(m);

    }
    public Medecin findbyId(Long id ) {
    return medecinRepositery.findById(id).orElse(null);
    }
    public String delete(Long id) {
     Medecin m = medecinRepositery.findById(id).orElse(null);
     medecinRepositery.delete(m);
     return "medecin deleted" ;
    }
    public Medecin modifier(Medecin medecin , Long id ) {
        medecin.setId(id);
        Medecin oldmedecin = medecinRepositery.findById(id).orElse(null);
        medecin.setNomprenom(medecin.getNomprenom()==null? oldmedecin.getNomprenom(): medecin.getNomprenom());
        medecin.setDatenaissance(medecin.getDatenaissance()== null ? oldmedecin.getDatenaissance(): medecin.getDatenaissance());
        medecin.setSexe(medecin.getSexe()==null? oldmedecin.getSexe() : medecin.getSexe());
        medecin.setEtatsociale(medecin.getEtatsociale()==null? oldmedecin.getEtatsociale(): medecin.getEtatsociale());
        medecin.setNumtel(medecin.getNumtel()==null? oldmedecin.getNumtel():medecin.getNumtel());
        medecin.setAdresse(medecin.getAdresse()==null? oldmedecin.getAdresse() : medecin.getAdresse());
        medecin.setEmail(medecin.getEmail()==null? oldmedecin.getEmail() :medecin.getEmail());
        medecin.setPassword(medecin.getPassword()==null? oldmedecin.getPassword() : medecin.getPassword());
        medecin.setNumcabinet(medecin.getNumcabinet()== null? oldmedecin.getNumcabinet() : medecin.getNumcabinet());
        medecin.setFaculte(medecin.getFaculte()==null ? oldmedecin.getFaculte() : medecin.getFaculte());
        medecin.setPhoto(medecin.getPhoto()==null? oldmedecin.getPhoto() :medecin.getPhoto());
      medecin.setSpecialite(medecin.getSpecialite()==null? oldmedecin.getSpecialite() : medecin.getSpecialite());
      medecin.setDatedachat(medecin.getDatedachat()==null? oldmedecin.getDatedachat():medecin.getDatedachat());
      medecin.setAboutme(medecin.getAboutme()==null?oldmedecin.getAboutme():medecin.getAboutme());medecin.setCnam(medecin.getCnam()==null?oldmedecin.getCnam():medecin.getCnam());
    medecin.setPrix(medecin.getPrix()==null?oldmedecin.getPrix():medecin.getPrix());
    medecin.setRole(medecin.getRole()==null?oldmedecin.getRole(): medecin.getRole());
    medecin.setState(medecin.getState()==null?oldmedecin.getState(): medecin.getState());
    medecin.setRendezVousList(medecin.getRendezVousList()==null?oldmedecin.getRendezVousList() : medecin.getRendezVousList());
    medecin.setCnam(medecin.getCnam()==null?oldmedecin.getCnam() : medecin.getCnam());
    medecin.setFicheConsultationList(medecin.getFicheConsultationList()==null?oldmedecin.getFicheConsultationList():medecin.getFicheConsultationList());
    medecin.setOrdonnanceList(medecin.getOrdonnanceList()==null?oldmedecin.getOrdonnanceList():medecin.getOrdonnanceList());
        return medecinRepositery.saveAndFlush(medecin);

    }
    public ResponseEntity<Resource> getFile( String filename) {
        Resource file = imageService.loadFile(filename);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
                .body(file);
    }

   /* public String randompassword() {
        String characters = "ABCDEFGHIJKLMOPIUYNBVCSQZERGabcdefghijklomnpkrstuvwxyz1234567890";
        String randomString = "";
        int length = 6;
        Random rand = new Random();
        char[] text = new char[length];
        for (int i = 0; i < length; i++) {
            text[i] = characters.charAt(rand.nextInt(characters.length()));

        }
        for (int i = 0; i < text.length; i++) {
            randomString += text[i];

        }

        return randomString ;
    }*/
}
