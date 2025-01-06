package com.example.pfefinale.repositery;

import com.example.pfefinale.models.Specialite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpecialiteRepositery extends JpaRepository<Specialite,Long> {
}
