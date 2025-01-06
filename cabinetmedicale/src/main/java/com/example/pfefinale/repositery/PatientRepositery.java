package com.example.pfefinale.repositery;

import com.example.pfefinale.models.Medecin;
import com.example.pfefinale.models.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PatientRepositery extends JpaRepository<Patient,Long>{




}
