package com.example.pfefinale.controller;

import com.example.pfefinale.models.Acteur;
import com.example.pfefinale.models.Admin;
import com.example.pfefinale.repositery.ActeurRepositery;
import com.example.pfefinale.services.interf.ActeurService;

import com.sun.tracing.dtrace.ProviderAttributes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
@RequestMapping("/acteur")
public class ActeurController {

    @Autowired
    private ActeurService acteurService;
    @Autowired
    private ActeurRepositery acteurRepositery;
    @Autowired
    private JavaMailSender javaMailSender;
    private final Path rootLocation = Paths.get("upload-images");

    @GetMapping("/findall")
    public List<Acteur> findall() {
        return acteurService.findallActeur();
    }

    @GetMapping("/findbyid/{id}")
    public Acteur findbyid(@PathVariable Long id) {
        return acteurService.findbyId(id);
    }

    @PostMapping("/create")
    public Acteur create(@RequestBody Acteur a) {
        return acteurService.Addacteur(a);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Long id) {
        return acteurService.delete(id);

    }

    @PutMapping("/modifier/{id}")
    public Acteur modifier(@RequestBody Acteur acteur, @PathVariable Long id) {
        return acteurService.modifier(acteur, id);
    }


    @PostMapping("/authentification")
    public ResponseEntity authentification(@RequestBody Acteur acteur) {
        Acteur a = this.acteurRepositery.authentification(acteur.getEmail(), acteur.getPassword());
        if (a == null) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity(a, HttpStatus.OK);
        }
    }

    @PostMapping("/confirmpassword")
    public ResponseEntity password(@RequestBody Acteur acteur) {
        Acteur a = acteurRepositery.cherchermotdepasse(acteur.getPassword());
        if (a == null) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity(a, HttpStatus.OK);

        }
    }

    @PostMapping("/confirmemail")
    public ResponseEntity email(@RequestBody Acteur acteur) {

        Acteur a = acteurRepositery.chercheremail(acteur.getEmail());
        if (a == null) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity(a, HttpStatus.OK);
            }
    }

    @GetMapping("/files/{filename:.+}")
    public ResponseEntity<Resource> getFile(@PathVariable String filename) {
        return acteurService.getFile(filename);
    }

    @GetMapping("/sendemail")
    public void sendemail() {
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom("cabinetmedicale424@gmail.com");
        msg.setTo("wiem.khedri50@gmail.com");
        msg.setSubject("Testing from Spring Boot");
        msg.setText("Hello World \n Spring Boot Email");
        javaMailSender.send(msg);
        System.out.println("email done");
    }

    @PostMapping("/forgetPassword")
    public Acteur forgetPassword(@RequestBody Acteur acteur) {
        Acteur a = acteurRepositery.chercheremail(acteur.getEmail());
        String caracters = "azertyuipomlABCFDEHLSPOJSIJHJBSqjsgdnwvx1234567890";
        String newPass = "";
        Random random = new Random();
        char[] text = new char[8];
        for (int i = 0; i < 8; i++) {
            text[i] = caracters.charAt(random.nextInt(caracters.length()));
        }
        for (int i = 0; i < text.length; i++) {
            newPass += text[i];
        }
        a.setPassword(newPass);
        acteurRepositery.save(a);
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom("cabinetmedicale424@gmail.com"); // Set the sender's email address
        msg.setTo(a.getEmail());
        msg.setSubject("New Password");
        msg.setText("This is your new password \n " + newPass);
        javaMailSender.send(msg);
        System.out.println(a);
        return acteurRepositery.chercheremail(acteur.getEmail());
    }

    @PutMapping("/updateimage/{id}")
    public Acteur updateImage(@RequestParam("file") MultipartFile file, @PathVariable Long id) {

        Acteur a = acteurRepositery.findById(id).orElse(null) ;
        try {
            String fileName = Integer.toString(new Random().nextInt(1000000000));
            String ext = file.getOriginalFilename().substring(file.getOriginalFilename().indexOf('.'), file.getOriginalFilename().length());
            String name = file.getOriginalFilename().substring(0, file.getOriginalFilename().indexOf('.'));
            String original = name + fileName + ext;
            Files.copy(file.getInputStream(), this.rootLocation.resolve(original));
            a.setPhoto(original);

        } catch (Exception e) {
            throw new RuntimeException("FAIL Error IMAGE check the back-end server !");
        }
        return acteurRepositery.saveAndFlush(a);
    }
}
