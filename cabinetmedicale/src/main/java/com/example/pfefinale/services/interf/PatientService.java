package com.example.pfefinale.services.interf;

import com.example.pfefinale.models.Medecin;
import com.example.pfefinale.models.Patient;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface PatientService {
    public List<Patient> findall();
    public Patient Add(Patient patient , MultipartFile file) ;
    public Patient findbyId(Long id ) ;
    public String delete(Long id) ;
    public Patient modifier(Patient patient , Long id ) ;
    public Patient addpatient(Patient patient,MultipartFile file) ;
    public ResponseEntity<Resource> getFile(String filename) ;
   public List<Patient> findallbymedecinid(Long id) ;

}
