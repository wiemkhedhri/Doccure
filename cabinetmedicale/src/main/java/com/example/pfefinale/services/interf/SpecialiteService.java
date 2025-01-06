package com.example.pfefinale.services.interf;

import com.example.pfefinale.models.Specialite;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface SpecialiteService {
    public List<Specialite> findall();
    public Specialite Add(Specialite specialite , MultipartFile file) ;
    public Specialite findbyId(Long id ) ;
    public String delete(Long id) ;
    public Specialite modifier(Specialite specialite , Long id ) ;
    public ResponseEntity<Resource> getFile(String filename) ;
}
