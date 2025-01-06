package com.example.pfefinale.controller;

import com.example.pfefinale.models.Admin;
import com.example.pfefinale.repositery.AdminRepositery;
import com.example.pfefinale.services.impl.AdminServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Random;

@RestController
@CrossOrigin("*")
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private AdminServiceImpl adminService ;
    @Autowired
    private AdminRepositery adminRepositery;
    private final Path rootLocation = Paths.get("upload-images");
    @GetMapping("/findall")
    public List<Admin> findall(){
        return adminService.findall();
    }
    @GetMapping("/findbyid/{id}")
    public Admin findbyid(@PathVariable Long id){
        return adminService.findbyId(id) ;
    }
    @DeleteMapping("/delete/{id}")
    public String delte(@PathVariable Long id){
       return  adminService.delete(id) ;
    }
    @PostMapping("/create")
    public Admin create(Admin admin , @RequestParam MultipartFile file){
        return adminService.Add(admin , file);
    }
    @PutMapping("/modifier/{id}")
    public Admin modifier(@PathVariable Long id, @RequestBody Admin admin){
        return adminService.modifier(admin , id);
    }

    @PutMapping("/updateimage/{id}")
    public Admin updateImage(@RequestParam("file") MultipartFile file, @PathVariable Long id) {

        Admin admin = adminRepositery.findById(id).orElse(null) ;
        try {
            String fileName = Integer.toString(new Random().nextInt(1000000000));
            String ext = file.getOriginalFilename().substring(file.getOriginalFilename().indexOf('.'), file.getOriginalFilename().length());
            String name = file.getOriginalFilename().substring(0, file.getOriginalFilename().indexOf('.'));
            String original = name + fileName + ext;
            Files.copy(file.getInputStream(), this.rootLocation.resolve(original));
            admin.setPhoto(original);

        } catch (Exception e) {
            throw new RuntimeException("FAIL Error IMAGE check the back-end server !");
        }

        return adminRepositery.saveAndFlush(admin);

    }

}
