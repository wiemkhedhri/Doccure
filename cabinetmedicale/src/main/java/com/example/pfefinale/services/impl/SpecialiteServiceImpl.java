package com.example.pfefinale.services.impl;

import com.example.pfefinale.models.Specialite;
import com.example.pfefinale.repositery.SpecialiteRepositery;
import com.example.pfefinale.services.interf.SpecialiteService;
import com.example.pfefinale.utils.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class SpecialiteServiceImpl implements SpecialiteService{
    @Autowired
    private SpecialiteRepositery specialiteRepositery ;
    @Autowired
   private  ImageService imageService ;

    public List<Specialite> findall(){
        return specialiteRepositery.findAll() ;
    }
    public Specialite Add(Specialite specialite , MultipartFile file) {
        String images=  imageService.CreateNameImage(file);
        imageService.store(file,images);
        specialite.setPhoto(images);
        return specialiteRepositery.save(specialite) ;

    }
    public Specialite findbyId(Long id ) {
        return specialiteRepositery.findById(id).orElse(null) ;
    }
    public String delete(Long id) {
        Specialite s =  specialiteRepositery.findById(id).orElse(null) ;
        specialiteRepositery.delete(s);
        return "specialite deleted ...";
    }
    public Specialite modifier(Specialite specialite , Long id ) {
        specialite.setId(id);
        Specialite oldspecialite = specialiteRepositery.findById(id).orElse(null) ;
        specialite.setSpecialites(specialite.getSpecialites()==null?oldspecialite.getSpecialites():specialite.getSpecialites());
        specialite.setPhoto(specialite.getPhoto()==null?oldspecialite.getPhoto() : specialite.getPhoto());
        specialite.setMedecins(specialite.getMedecins()==null?oldspecialite.getMedecins() : specialite.getMedecins());
        return specialiteRepositery.saveAndFlush(specialite) ;
    }
    public ResponseEntity<Resource> getFile(String filename) {
        Resource file = imageService.loadFile(filename);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
                .body(file);
    }
}
