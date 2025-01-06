package com.example.pfefinale.services.interf;

import com.example.pfefinale.models.FicheConsultation;
import com.example.pfefinale.models.Ordonnance;

import java.util.List;

public interface OrdonnanceService {
    public List<Ordonnance> findall();
    public Ordonnance Add(Ordonnance ordonnance , Long id_dossier , Long id_medecin) ;
    public Ordonnance findbyId(Long id ) ;
    public String delete(Long id) ;
    public Ordonnance modifier(Ordonnance ordonnance, Long id ) ;
}
