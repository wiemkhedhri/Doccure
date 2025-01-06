package com.example.pfefinale.services.impl;

import com.example.pfefinale.models.Admin;
import com.example.pfefinale.repositery.AdminRepositery;
import com.example.pfefinale.services.interf.AdminService;
import com.example.pfefinale.utils.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class AdminServiceImpl implements AdminService {
    @Autowired
    private AdminRepositery adminRepositery ;
    @Autowired
    private ImageService imageService ;
    public List<Admin> findall(){
        return adminRepositery.findAll() ;
    }
    public Admin Add(Admin admin , MultipartFile file ) {

        String images= imageService.CreateNameImage(file);
        imageService.store(file,images);
        admin.setPhoto(images);
        admin.setRole("admin");
        return adminRepositery.save(admin) ;
    }
    public Admin findbyId(Long id ) {
        return adminRepositery.findById(id).orElse(null);
    }
    public String delete(Long id) {
        Admin a = adminRepositery.findById(id).orElse(null);
         adminRepositery.delete(a);
        return "admin deleted ...";
    }
    public Admin modifier(Admin admin , Long id ){
        admin.setId(id);
        Admin oldadmin = adminRepositery.findById(id).orElse(null);
        admin.setNomprenom(admin.getNomprenom()==null? oldadmin.getNomprenom(): admin.getNomprenom());
        admin.setDatenaissance(admin.getDatenaissance()== null ? oldadmin.getDatenaissance(): admin.getDatenaissance());
        admin.setSexe(admin.getSexe()==null? oldadmin.getSexe() : admin.getSexe());
        admin.setEtatsociale(admin.getEtatsociale()==null? oldadmin.getEtatsociale(): admin.getEtatsociale());
        admin.setNumtel(admin.getNumtel()==null? oldadmin.getNumtel():admin.getNumtel());
        admin.setAdresse(admin.getAdresse()==null? oldadmin.getAdresse() : admin.getAdresse());
        admin.setEmail(admin.getEmail()==null? oldadmin.getEmail() :admin.getEmail());
        admin.setPassword(admin.getPassword()==null? oldadmin.getPassword() : admin.getPassword());
        admin.setAboutme(admin.getAboutme()==null?oldadmin.getAboutme() : admin.getAboutme());
admin.setPhoto(admin.getPhoto()==null?oldadmin.getPhoto() : admin.getPhoto());
admin.setRole(admin.getRole()==null?oldadmin.getRole() : admin.getRole());
admin.setState(admin.getState()==null?oldadmin.getState(): admin.getState()); ;
        return  adminRepositery.saveAndFlush(admin);
    }
}
