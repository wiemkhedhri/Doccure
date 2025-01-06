package com.example.pfefinale.services.impl;

import com.example.pfefinale.models.Medecin;
import com.example.pfefinale.models.Patient;
import com.example.pfefinale.models.RendezVous;
import com.example.pfefinale.repositery.MedecinRepositery;
import com.example.pfefinale.repositery.PatientRepositery;
import com.example.pfefinale.repositery.RendezvousRepositery;
import com.example.pfefinale.utils.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class PatientServiceImpl {
    @Autowired
    private PatientRepositery patientRepositery ;
    @Autowired
    private ImageService imageService ;
    @Autowired
    private RendezvousRepositery rendezvousRepositery ;
    @Autowired
    private MedecinRepositery medecinRepositery ;
    public List<Patient> findall(){
        return  patientRepositery.findAll() ;
    }
    public Patient Add(Patient patient , MultipartFile file) {
        patient.setRole("patient");
        String images=  imageService.CreateNameImage(file);
        imageService.store(file,images);
        patient.setPhoto(images);
        return patientRepositery.save(patient);

    }
    public Patient findbyId(Long id ) {
        return  patientRepositery.findById(id).orElse(null) ;
    }
    public String delete(Long id) {
        Patient p = patientRepositery.findById(id).orElse(null) ;
        patientRepositery.delete(p);
        return "patient deleted .." ;
    }
    public Patient modifier(Patient p , Long id ) {
        p.setId(id);
        Patient oldpatient = patientRepositery.findById(id).orElse(null);
        p.setNomprenom(p.getNomprenom()==null? oldpatient.getNomprenom(): p.getNomprenom());
        p.setDatenaissance(p.getDatenaissance()== null ? oldpatient.getDatenaissance(): p.getDatenaissance());
        p.setSexe(p.getSexe()==null? oldpatient.getSexe() : p.getSexe());
        p.setEtatsociale(p.getEtatsociale()==null? oldpatient.getEtatsociale(): p.getEtatsociale());
        p.setNumtel(p.getNumtel()==null? oldpatient.getNumtel():p.getNumtel());
        p.setAdresse(p.getAdresse()==null? oldpatient.getAdresse() : p.getAdresse());
        p.setEmail(p.getEmail()==null? oldpatient.getEmail() :p.getEmail());
        p.setPassword(p.getPassword()==null? oldpatient.getPassword() : p.getPassword());
        p.setProfession(p.getProfession()==null? oldpatient.getProfession() : p.getProfession()) ;
        p.setRendezVous(p.getRendezVous()==null? oldpatient.getRendezVous():p.getRendezVous());
        p.setRole(p.getRole()==null?oldpatient.getRole():p.getRole());
   p.setState(p.getState()==null?oldpatient.getState():p.getState());
   p.setPhoto(p.getPhoto()==null?oldpatient.getPhoto():p.getPhoto());
   p.setRendezVous(p.getRendezVous()==null?oldpatient.getRendezVous() : p.getRendezVous());

        return patientRepositery.saveAndFlush(p);
    }
    public Patient addpatient(Patient patient,MultipartFile file){
        String images= imageService.CreateNameImage(file);
        imageService.store(file,images);
        patient.setPhoto(images);
        patient.setRole("patient");
        return patientRepositery.save(patient) ;}


    public ResponseEntity<Resource> getFile(String filename) {
        Resource file = imageService.loadFile(filename);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
                .body(file);
    }

}
