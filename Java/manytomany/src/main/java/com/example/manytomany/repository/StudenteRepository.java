package com.example.manytomany.repository;

import com.example.manytomany.model.Studente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudenteRepository extends JpaRepository<Studente, Long> {
}
