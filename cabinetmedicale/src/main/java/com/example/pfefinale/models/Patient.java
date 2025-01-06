package com.example.pfefinale.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Patient extends Acteur {
    private String profession ;

    //getters and setters
    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    //relation entre patient et rendezvous
    @OneToMany(mappedBy = "patientRV")

    private List<RendezVous> rendezVous ;
    //getters and setters

@JsonIgnore
    public List<RendezVous> getRendezVous() {
        return rendezVous;
    }

    public void setRendezVous(List<RendezVous> rendezVous) {
        this.rendezVous = rendezVous;
    }

    //relation entre patient et dossier medicale

}

