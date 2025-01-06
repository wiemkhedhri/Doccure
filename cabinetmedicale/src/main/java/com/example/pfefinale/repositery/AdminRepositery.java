package com.example.pfefinale.repositery;

import com.example.pfefinale.models.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepositery extends JpaRepository<Admin,Long> {
}
