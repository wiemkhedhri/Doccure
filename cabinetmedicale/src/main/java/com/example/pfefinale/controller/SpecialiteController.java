package com.example.pfefinale.controller;

import com.example.pfefinale.models.Admin;
import com.example.pfefinale.models.Specialite;
import com.example.pfefinale.repositery.SpecialiteRepositery;
import com.example.pfefinale.services.impl.SpecialiteServiceImpl;
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
@RequestMapping("/specialite")
public class SpecialiteController {
    @Autowired
    private SpecialiteServiceImpl specialiteService ;
    @Autowired
    private SpecialiteRepositery specialiteRepositery ;
    private final Path rootLocation = Paths.get("upload-images");
    @GetMapping("/findall")
    public List<Specialite> findall(){
        return specialiteService.findall() ;
    }
    @GetMapping("/findbyid/{id}")
    public Specialite findbyid(@PathVariable Long id){
        return  specialiteService.findbyId(id) ;
    }
    @PostMapping("/create")
    public Specialite create(Specialite specialite , @RequestParam MultipartFile file ){
        return specialiteService.Add(specialite,file) ;
    }
    @PutMapping("/modifier/{id}")
    public Specialite modifier(@PathVariable Long id , @RequestBody Specialite specialite){
        return specialiteService.modifier(specialite , id) ;
    }
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id){
         specialiteService.delete(id) ;
    }
    @GetMapping("/files/{filename:.+}")
    public ResponseEntity<Resource> getFile(@PathVariable String filename) {
        return  specialiteService.getFile(filename);
    }
    @PutMapping("/updateimage/{id}")
    public Specialite updateImage(@RequestParam("file") MultipartFile file, @PathVariable Long id) {

        Specialite specialite = specialiteRepositery.findById(id).orElse(null) ;
        try {
            String fileName = Integer.toString(new Random().nextInt(1000000000));
            String ext = file.getOriginalFilename().substring(file.getOriginalFilename().indexOf('.'), file.getOriginalFilename().length());
            String name = file.getOriginalFilename().substring(0, file.getOriginalFilename().indexOf('.'));
            String original = name + fileName + ext;
            Files.copy(file.getInputStream(), this.rootLocation.resolve(original));
            specialite.setPhoto(original);

        } catch (Exception e) {
            throw new RuntimeException("FAIL Error IMAGE check the back-end server !");
        }

        return specialiteRepositery.saveAndFlush(specialite);

    }

}
