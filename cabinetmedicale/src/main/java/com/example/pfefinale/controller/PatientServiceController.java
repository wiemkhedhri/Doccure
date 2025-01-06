package com.example.pfefinale.controller;

import com.example.pfefinale.models.Medecin;
import com.example.pfefinale.models.Patient;
import com.example.pfefinale.repositery.MedecinRepositery;
import com.example.pfefinale.repositery.PatientRepositery;
import com.example.pfefinale.services.impl.PatientServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/patient")
public class PatientServiceController {
    @Autowired
    private PatientServiceImpl patientService;
    @Autowired
    private JavaMailSender javaMailSender;
    @Autowired
    private PatientRepositery patientRepositery ;
    @Autowired
    private MedecinRepositery medecinRepositery ;
    @GetMapping("/findall")
    public List<Patient> findall(){
        return patientService.findall() ;
    }
    @GetMapping("/findbyid/{id}")
    public Patient findbyid(@PathVariable Long id){
        return patientService.findbyId(id) ;
    }
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Long id ){
        return  patientService.delete(id) ;
    }
    @PutMapping("/modifier/{id}")
    public Patient modifier(@PathVariable Long id , @RequestBody Patient patient){
        return patientService.modifier(patient , id) ;
    }

    @PostMapping("/create")
    public Patient create ( @RequestParam MultipartFile file , Patient patient){
   SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom("cabinetmedicale424@gmail.com");
        msg.setSubject("You are officially member with us");
         msg.setText(" Enjoy our Services");
        javaMailSender.send(msg);
        return patientService.Add(patient,file ) ;
    }
     @PostMapping("/add")
    public Patient createpatient(  Patient patient , @RequestParam MultipartFile file){
     SimpleMailMessage msg = new SimpleMailMessage();
         msg.setFrom("cabinetmedicale424@gmail.com");
         msg.setTo(patient.getEmail());
         msg.setSubject("You are officially member with us");
         msg.setText(  "Enjoy our services" );
         javaMailSender.send(msg);
         return patientService.addpatient(patient,file) ;
     }
    @PostMapping("/addbyplat")
    public Patient createpatientbymedecin(   @RequestBody Patient patient ){


       patient.setPhoto("default.png");
       patient.setRole("patient");
       SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(patient.getEmail());
        msg.setSubject("You are officially member with us");
        msg.setText(  "Enjoy our services" );
        msg.setFrom("cabinetmedicale424@gmail.com");
        javaMailSender.send(msg);
        return  patientRepositery.save(patient);
    }
    @GetMapping("/files/{filename:.+}")
    public ResponseEntity<Resource> getFile(@PathVariable String filename) {
        return  patientService.getFile(filename);
    }



}
