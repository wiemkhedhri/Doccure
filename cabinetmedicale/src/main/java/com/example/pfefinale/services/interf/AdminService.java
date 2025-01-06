package com.example.pfefinale.services.interf;

import com.example.pfefinale.models.Admin;
import com.example.pfefinale.models.Medecin;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface AdminService {
    public List<Admin> findall();
    public Admin Add(Admin admin , MultipartFile file ) ;
    public Admin findbyId(Long id ) ;
    public String delete(Long id) ;
    public Admin modifier(Admin admin , Long id ) ;
}
