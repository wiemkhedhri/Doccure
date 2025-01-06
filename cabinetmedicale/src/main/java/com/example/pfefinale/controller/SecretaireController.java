package com.example.pfefinale.controller;

import com.example.pfefinale.models.Medecin;
import com.example.pfefinale.models.Secretaire;
import com.example.pfefinale.repositery.SecretaireRepositery;
import com.example.pfefinale.services.interf.SecretaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Random;

@RestController
@CrossOrigin("*")
@RequestMapping("/secretaire")
public class SecretaireController {
    @Autowired
    private SecretaireService secretaireService;
    @Autowired
    private JavaMailSender javaMailSender;
    @Autowired
    private SecretaireRepositery secretaireRepositery ;
    private final Path rootLocation = Paths.get("upload-images");
    @GetMapping("/findall")
    public List<Secretaire> findall() {
        return secretaireService.findall();
    }

    @GetMapping("/findbyid/{id}")
    public Secretaire findbyid(@PathVariable Long id) {
        return secretaireService.findbyId(id);
    }

    @PostMapping("/create/{medecin_id}")
    public Secretaire add(@RequestBody Secretaire secretaire, @PathVariable Long medecin_id) {

        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(secretaire.getEmail());
        secretaire.setPassword(randompassword());
        msg.setSubject("You are officially member with Doccure Group");
        msg.setText("Here you can find Your Information  to access into our plateforme ;  your  Email : " + secretaire.getEmail() + " and your password :" + secretaire.getPassword());
        javaMailSender.send(msg);
        return secretaireService.Add(secretaire, medecin_id);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id) {
         secretaireService.delete(id);
    }

    @PutMapping("/modifier/{id}")
    public Secretaire modifier(@RequestBody Secretaire secretaire, @PathVariable Long id) {
        return secretaireService.modifier(secretaire, id);
    }

    @GetMapping("/randompassword")
    public String randompassword() {
        String characters = "ABCDEFGHIJKLMOPIUYNBVCSQZERG123456789";
        String randomString = "";
        int length = 5;
        Random rand = new Random();
        char[] text = new char[length];
        for (int i = 0; i < length; i++) {
            text[i] = characters.charAt(rand.nextInt(characters.length()));

        }
        for (int i = 0; i < text.length; i++) {
            randomString += text[i];

        }
        return randomString;
    }
@GetMapping("/getallsecretairebymedeicn/{medecin_id}")
    public List<Secretaire> findallbymedecin(@PathVariable Long medecin_id){
        return secretaireRepositery.cherchersecretaire(medecin_id) ;
}
    @PutMapping("/updateimage/{id}")
    public Secretaire updateImage(@RequestParam("file") MultipartFile file, @PathVariable Long id) {

        Secretaire s = secretaireRepositery.findById(id).orElse(null) ;
        try {
            String fileName = Integer.toString(new Random().nextInt(1000000000));
            String ext = file.getOriginalFilename().substring(file.getOriginalFilename().indexOf('.'), file.getOriginalFilename().length());
            String name = file.getOriginalFilename().substring(0, file.getOriginalFilename().indexOf('.'));
            String original = name + fileName + ext;
            Files.copy(file.getInputStream(), this.rootLocation.resolve(original));
            s.setPhoto(original);

        } catch (Exception e) {
            throw new RuntimeException("FAIL Error IMAGE check the back-end server !");
        }

        return secretaireRepositery.saveAndFlush(s);

    }


}
