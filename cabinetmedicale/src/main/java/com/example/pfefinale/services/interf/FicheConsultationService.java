package com.example.pfefinale.services.interf;

import com.example.pfefinale.models.FicheConsultation;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface FicheConsultationService {
    public List<FicheConsultation> findall();
    public FicheConsultation Add(FicheConsultation fiche , Long id_dossier , Long id_medecin) ;
    public FicheConsultation findbyId(Long id ) ;
    public String delete(Long id) ;
  public FicheConsultation modifier(FicheConsultation f, Long id ) ;
}
