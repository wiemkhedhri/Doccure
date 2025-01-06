package com.example.pfefinale.models;

import javax.persistence.*;

@Entity
public class FicheConsultation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long numfiche ;
    private String nomprenom ;
private String description  ;
 private String dateconsultation ;


    //getters and setters

    public Long getNumfiche() {
        return numfiche;
    }

    public void setNumfiche(Long numfiche) {
        this.numfiche = numfiche;
    }

    public String getNomprenom() {
        return nomprenom;
    }

    public void setNomprenom(String nomprenom) {
        this.nomprenom = nomprenom;
    }

    public String getDateconsultation() {
        return dateconsultation;
    }

    public void setDateconsultation(String dateconsultation) {
        this.dateconsultation = dateconsultation;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    //relation entre medecin et fiche consultation
    @ManyToOne
    @JoinColumn(name="medecin_id")
    private Medecin MedFicheConsultation ;
    //getters and setters

    public Medecin getMedFicheConsultation() {
        return MedFicheConsultation;
    }

    public void setMedFicheConsultation(Medecin medFicheConsultation) {
        MedFicheConsultation = medFicheConsultation;
    }
    //relation entre fiche consultation et dossier medicale
    @ManyToOne
    @JoinColumn(name="dossier_id")
    private DossierMedicale dossierMedicaleFC ;
    //getters and setters

    public DossierMedicale getDossierMedicaleFC() {
        return dossierMedicaleFC;
    }

    public void setDossierMedicaleFC(DossierMedicale dossierMedicaleFC) {
        this.dossierMedicaleFC = dossierMedicaleFC;
    }
}
