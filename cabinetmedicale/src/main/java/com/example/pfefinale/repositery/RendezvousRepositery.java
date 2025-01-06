package com.example.pfefinale.repositery;

import com.example.pfefinale.models.Patient;
import com.example.pfefinale.models.RendezVous;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface RendezvousRepositery extends JpaRepository<RendezVous,Long> {
    @Query("SELECT m FROM RendezVous m where m.patientRV.id = ?1 ")
    List<RendezVous> listerendezvouspatient(Long patieny_id);

    @Query("SELECT m FROM RendezVous m where m.medecinrendezvous.id = ?1 ")
    List<RendezVous> listerendezvousmedecin(Long medcin_id);
    @Query("SELECT m FROM RendezVous m where m.patientRV.id = ?1 ")
    Patient foundpatient(Long rendezvousid);
    @Query("SELECT r FROM RendezVous r Where  r.medecinrendezvous.id = ?1 and r.starttime > current_date  ")
    List <RendezVous> findrendezvousBydate (Long id_medecin) ;
    @Query("SELECT r FROM RendezVous r Where  r.medecinrendezvous.id = ?1 and   r.patientvrai = true ")
    List <RendezVous> findpatientmedecin (Long id_medecin) ;
    @Query("SELECT r FROM RendezVous r WHERE r.medecinrendezvous.id = ?1 AND r.starttime >= ?2 AND r.starttime <= ?3")
    List<RendezVous> findupcoming(Long id_medecin, Date startDate, Date endDate);


}
