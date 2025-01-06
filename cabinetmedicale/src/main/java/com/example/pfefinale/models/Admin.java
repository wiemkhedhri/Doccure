package com.example.pfefinale.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Admin extends Acteur {
    private String aboutme ;

    @Override
    public String getAboutme() {
        return aboutme;
    }

    @Override
    public void setAboutme(String aboutme) {
        this.aboutme = aboutme;
    }

    //relation entre Admin et Medecin
    @OneToMany(mappedBy = "admin")
    private List<Medecin> medecinList ;
    //getters and setters
    @JsonIgnore
    public List<Medecin> getMedecinList() {
        return medecinList;
    }

    public void setMedecinList(List<Medecin> medecinList) {
        this.medecinList = medecinList;
    }
}
