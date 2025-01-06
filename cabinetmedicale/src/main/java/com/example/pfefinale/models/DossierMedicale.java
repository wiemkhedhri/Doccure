package com.example.pfefinale.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class DossierMedicale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long numdossier ;
    private String nomprenom ;


    //getters and setters

    public Long getNumdossier() {
        return numdossier;
    }

    public void setNumdossier(Long numdossier) {
        this.numdossier = numdossier;
    }

    public String getNomprenom() {
        return nomprenom;
    }

    public void setNomprenom(String nomprenom) {
        this.nomprenom = nomprenom;
    }


    //relation entre secretaire et dossier medicale
    @ManyToOne
    @JoinColumn(name = "secretaire_id")
    private Secretaire SecDossier ;
    //getters and setters


    public Secretaire getSecDossier() {
        return SecDossier;
    }

    public void setSecDossier(Secretaire secDossier) {
        SecDossier = secDossier;
    }

    //relation entre dossier medicale et ordonnance
    @OneToMany(mappedBy = "dossierMedicaleOrd")
    private List<Ordonnance> ordonnanceList ;
    //getters and setters
    @JsonIgnore
    public List<Ordonnance> getOrdonnanceList() {
        return ordonnanceList;
    }

    public void setOrdonnanceList(List<Ordonnance> ordonnanceList) {
        this.ordonnanceList = ordonnanceList;
    }

    //relation entre dossier medicale et fiche consultation
    @OneToMany(mappedBy = "dossierMedicaleFC")
    private List<FicheConsultation> ficheConsultationList ;
    //getters and setters
    @JsonIgnore
    public List<FicheConsultation> getFicheConsultationList() {
        return ficheConsultationList;
    }

    public void setFicheConsultationList(List<FicheConsultation> ficheConsultationList) {
        this.ficheConsultationList = ficheConsultationList;
    }


    //relation entre dossier medicale et patient
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="patient_id")

    private Patient patient ;

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }
}
