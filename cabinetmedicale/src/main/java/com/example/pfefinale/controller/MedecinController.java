package com.example.pfefinale.controller;


import com.example.pfefinale.models.Acteur;
import com.example.pfefinale.models.Medecin;
import com.example.pfefinale.repositery.MedecinRepositery;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import com.example.pfefinale.services.impl.MedecinServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Random;


@RestController
@CrossOrigin("*")
@RequestMapping("/medecin")
public class MedecinController {
    @Autowired
    private MedecinServiceImpl medecinService;

    @Autowired
    private JavaMailSender javaMailSender;
    @Autowired
    private MedecinRepositery medecinRepositery ;
    private final Path rootLocation = Paths.get("upload-images");


    @GetMapping("/findall")
    public List<Medecin> findall() {
        return medecinService.findallmedecin();
    }

    @GetMapping("/findbyid/{id}")
    public Medecin findbyid(@PathVariable Long id) {
        return medecinService.findbyId(id);
    }

    @DeleteMapping("/delete/{id}")
    public String delte(@PathVariable Long id) {
        return medecinService.delete(id);
    }

    @PostMapping("/create/{id_specialite}")
    public Medecin add (  @RequestBody Medecin m, @PathVariable Long id_specialite) {
        m.setPassword(randompassword()) ;

    /*    SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(m.getEmail());
        msg.setSubject("You are officially member with us");
        msg.setText(  "Here you can find Your informations to access our plateforme your  email " +m.getEmail() +" and your password " +m.getPassword() );
        javaMailSender.send(msg);
        System.out.println(m.getPassword());*/
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom("cabinetmedicale424@gmail.com");
        msg.setTo(m.getEmail());
        msg.setSubject("You are officially member with us");
        msg.setText("Here you can find your  password::" +m.getPassword() );
        javaMailSender.send(msg);
        return medecinService.Add(m, id_specialite);
    }

    @PutMapping("/modifier/{id}")
    public Medecin modifier(@RequestBody Medecin medecin, @PathVariable Long id) {
        return medecinService.modifier(medecin, id);
    }

    @GetMapping("/files/{filename:.+}")
    public ResponseEntity<Resource> getFile(@PathVariable String filename) {
        return medecinService.getFile(filename);
    }

    @GetMapping("/randompassword")
    public String randompassword() {
        String characters = "ABCDEFGHIJKLMOPIUYNBVCSQZERGabcdefghijklomponc1234567890";
        String randomString = "";
        int length = 8;
        Random rand = new Random();
        char[] text = new char[length];
        for (int i = 0; i < length; i++) {
            text[i] = characters.charAt(rand.nextInt(characters.length()));
        }
        for (int i = 0; i < text.length; i++) {
            randomString += text[i];

        }
        return randomString ;
    }



    @GetMapping("/sendemail")
    public void sendemail(@RequestBody Medecin m  ){
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom("cabinetmedicale424@gmail.com");
        msg.setTo(m.getEmail());
        msg.setSubject("You are officially member with us");
        msg.setText("Here you can find your  email " );
       javaMailSender.send(msg);
        System.out.println("email done");
    }
    @GetMapping ("/findmedecin/{sexe}/{specialite}")
    public List<Medecin> findmedecin (@PathVariable String sexe , @PathVariable String specialite) {
        return  medecinRepositery.cherchermedecin(sexe,specialite) ;
    }
    @PutMapping("/updateimage/{id}")
    public Medecin updateImage(@RequestParam("file") MultipartFile file, @PathVariable Long id) {

        Medecin m = medecinRepositery.findById(id).orElse(null) ;
        try {
            String fileName = Integer.toString(new Random().nextInt(1000000000));
            String ext = file.getOriginalFilename().substring(file.getOriginalFilename().indexOf('.'), file.getOriginalFilename().length());
            String name = file.getOriginalFilename().substring(0, file.getOriginalFilename().indexOf('.'));
            String original = name + fileName + ext;
            Files.copy(file.getInputStream(), this.rootLocation.resolve(original));
            m.setPhoto(original);

        } catch (Exception e) {
            throw new RuntimeException("FAIL Error IMAGE check the back-end server !");
        }

        return medecinRepositery.saveAndFlush(m);

    }
@GetMapping("/findthreemedecin")
    private List<Medecin> findmedecin(){
        return medecinRepositery.findmedecinasc() ;
}
}