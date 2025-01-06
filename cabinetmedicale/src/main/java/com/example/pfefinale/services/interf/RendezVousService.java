package com.example.pfefinale.services.interf;

import com.example.pfefinale.models.RendezVous;

import java.util.List;

public interface RendezVousService {
    public List<RendezVous> findall();
    public RendezVous Add(RendezVous rendezVous , Long idmedecin ,  Long idpatient ) ;
    public RendezVous findbyId(Long id ) ;
    public void delete(Long id) ;
    public RendezVous modifier(RendezVous rendezVous , Long id ) ;
/*    public List<RendezVous> findallbypatientid(Long id) ;*/
}
