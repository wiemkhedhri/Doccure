package com.example.pfefinale.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
public class RendezVous {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long coderv ;
  //  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dD MMMM dd yyyy hh:mm:ss ",timezone="GMT")
  //  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "d MMMM dd yyyy hh:mm:ss ",timezone = "GMT+0100")
  @JsonFormat(timezone = "GMT+0100")
    private Date starttime ;
//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "d MMMM dd yyyy hh:mm:ss ",timezone="GMT")
//@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "d MMMM dd yyyy hh:mm:ss ",timezone = "GMT+0100")
@JsonFormat(timezone = "GMT+0100")
    private Date endtime ;

    private String nomprenom ;

    private String description;
private Boolean patientvrai ;
    //getters and setters


    public Date getStarttime() {
        return starttime;
    }

    public void setStarttime(Date starttime) {
        this.starttime = starttime;
    }

    public Date getEndtime() {
        return endtime;
    }

    public void setEndtime(Date endtime) {
        this.endtime = endtime;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getCoderv() {
        return coderv;
    }

    public void setCoderv(Long coderv) {
        this.coderv = coderv;
    }

    public String getNomprenom() {
        return nomprenom;
    }

    public void setNomprenom(String nomprenom) {
        this.nomprenom = nomprenom;
    }

    public Boolean getPatientvrai() {
        return patientvrai;
    }

    public void setPatientvrai(Boolean patientvrai) {
        this.patientvrai = patientvrai;
    }

    //relatioon entre medecin et rendezvous
    @ManyToOne
    @JoinColumn(name="medecin_id")
    private Medecin medecinrendezvous ;
    //geterres and setters


    public Medecin getMedecinrendezvous() {
        return medecinrendezvous;
    }

    public void setMedecinrendezvous(Medecin medecinrendezvous) {
        this.medecinrendezvous = medecinrendezvous;
    }

    //relation entre rendezvous et secretaire
    @ManyToOne
    @JoinColumn(name="secretaire_id")
    private Secretaire SecretaireRV ;
    //getters and setters

    public Secretaire getSecretaireRV() {
        return SecretaireRV;
    }

    public void setSecretaireRV(Secretaire secretaireRV) {
        SecretaireRV = secretaireRV;
    }
    //relation entre patient et rendezvous
        @ManyToOne
        @JoinColumn(name = "patient_id")
    private Patient patientRV ;
    //getters and setters

    public Patient getPatientRV() {
        return patientRV;
    }

    public void setPatientRV(Patient patientRV) {
        this.patientRV = patientRV;
    }
}
