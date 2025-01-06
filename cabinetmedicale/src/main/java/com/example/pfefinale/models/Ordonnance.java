package com.example.pfefinale.models;

import javax.persistence.*;

@Entity
public class Ordonnance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long numordonnance ;
    private String dateordonnance ;
  private String nomprenom ;
    private String prescription ;

    //getters and setters

    public Long getNumordonnance() {
        return numordonnance;
    }

    public void setNumordonnance(Long numordonnance) {
        this.numordonnance = numordonnance;
    }

    public String getDateordonnance() {
        return dateordonnance;
    }

    public void setDateordonnance(String dateordonnance) {
        this.dateordonnance = dateordonnance;
    }

    public String getNomprenom() {
        return nomprenom;
    }

    public void setNomprenom(String nomprenom) {
        this.nomprenom = nomprenom;
    }

    public String getPrescription() {
        return prescription;
    }

    public void setPrescription(String prescription) {
        this.prescription = prescription;
    }
    //relations entre ordonnance et medecin
    @ManyToOne
    @JoinColumn(name="medecin_id")
    private Medecin MedecinOrdonnance ;
    //getters

    public Medecin getMedecinOrdonnance() {
        return MedecinOrdonnance;
    }

    public void setMedecinOrdonnance(Medecin medecinOrdonnance) {
        MedecinOrdonnance = medecinOrdonnance;
    }
    //relation entre ordonnance et dossier medicale
    @ManyToOne
    @JoinColumn(name="dossier_id")
    private DossierMedicale dossierMedicaleOrd ;
    //getters and setters

    public DossierMedicale getDossierMedicaleOrd() {
        return dossierMedicaleOrd;
    }

    public void setDossierMedicaleOrd(DossierMedicale dossierMedicaleOrd) {
        this.dossierMedicaleOrd = dossierMedicaleOrd;
    }
}
