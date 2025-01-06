package com.example.pfefinale.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Secretaire extends Acteur{


    //getters and setters

    //relation entre le medecin et le secretaire
    @ManyToOne
    @JoinColumn(name="medecin_id")
    private Medecin medecin ;
           //getters and setters 
    public Medecin getMedecin() {
        return medecin;
    }

    public void setMedecin(Medecin medecin) {
        this.medecin = medecin;
    }
    //*******relation entre rendezvous et secretaire
    @OneToMany(mappedBy = "SecretaireRV")
    private List<RendezVous> rendezVousList ;
    //getters and setters
    @JsonIgnore
    public List<RendezVous> getRendezVousList() {
        return rendezVousList;
    }

    public void setRendezVousList(List<RendezVous> rendezVousList) {
        this.rendezVousList = rendezVousList;
    }
    //*******relation entre dossier medicale et secretaire
    @OneToMany(mappedBy = "SecDossier")
    private List<DossierMedicale> dossierMedicaleList ;
    //getters and setters
    @JsonIgnore
    public List<DossierMedicale> getDossierMedicaleList() {
        return dossierMedicaleList;
    }

    public void setDossierMedicaleList(List<DossierMedicale> dossierMedicaleList) {
        this.dossierMedicaleList = dossierMedicaleList;
    }


}
