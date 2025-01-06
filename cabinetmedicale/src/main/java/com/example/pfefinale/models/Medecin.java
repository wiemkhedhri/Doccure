package com.example.pfefinale.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Medecin extends Acteur{
    private Long numcabinet;
    private String faculte ;
      private String aboutme ;
private String datedachat ;

private String cnam ;
private String prix ;

    //getters and setters
    public Long getNumcabinet() {
        return numcabinet;
    }

    public void setNumcabinet(Long numcabinet) {
        this.numcabinet = numcabinet;
    }

    public String getFaculte() {
        return faculte;
    }

    public void setFaculte(String faculte) {
        this.faculte = faculte;
    }



    public String getDatedachat() {
        return datedachat;
    }

    public void setDatedachat(String datedachat) {
        this.datedachat = datedachat;
    }

    @Override
    public String getAboutme() {
        return aboutme;
    }

    public String getCnam() {
        return cnam;
    }

    public void setCnam(String cnam) {
        this.cnam = cnam;
    }

    @Override
    public void setAboutme(String aboutme) {
        this.aboutme = aboutme;
    }

    public String getPrix() {
        return prix;
    }

    public void setPrix(String prix) {
        this.prix = prix;
    }

    //relation entre Medecin et Admin
    @ManyToOne
    @JoinColumn(name="admin_id")
    private Admin admin ;

    //getters and setters

    public Admin getAdmin() {
        return admin;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
    }
    //relation entre le medecin et secretaire
    @OneToMany(mappedBy = "medecin")
    private List<Secretaire> secretaireList ;
   //getters and setters
     @JsonIgnore
    public List<Secretaire> getSecretaireList() {
        return secretaireList;
    }

    public void setSecretaireList(List<Secretaire> secretaireList) {
        this.secretaireList = secretaireList;
    }


    //relation entre medecin et fiche consultation
    @OneToMany(mappedBy = "MedFicheConsultation")
    private List<FicheConsultation> ficheConsultationList ;
    //getters and setters
    @JsonIgnore
    public List<FicheConsultation> getFicheConsultationList() {
        return ficheConsultationList;
    }

    public void setFicheConsultationList(List<FicheConsultation> ficheConsultationList) {
        this.ficheConsultationList = ficheConsultationList;
    }
    //relation entre ordonnance et medecin
    @OneToMany(mappedBy = "MedecinOrdonnance")
    private List<Ordonnance> ordonnanceList ;
    //getters and setters
    @JsonIgnore
    public List<Ordonnance> getOrdonnanceList() {
        return ordonnanceList;
    }

    public void setOrdonnanceList(List<Ordonnance> ordonnanceList) {
        this.ordonnanceList = ordonnanceList;
    }

    //relation entre medecin et rendezvous
    @OneToMany(mappedBy = "medecinrendezvous")
    private List<RendezVous> rendezVousList ;
    //getters and setters
    @JsonIgnore
    public List<RendezVous> getRendezVousList() {
        return rendezVousList;
    }

    public void setRendezVousList(List<RendezVous> rendezVousList) {
        this.rendezVousList = rendezVousList;
    }


    //relation entre medecin et specialite
    @ManyToOne
    @JoinColumn(name="specialite_id")
    private Specialite specialite ;
    //getters and setters


    public Specialite getSpecialite() {
        return specialite;
    }

    public void setSpecialite(Specialite specialite) {
        this.specialite = specialite;
    }
 }
