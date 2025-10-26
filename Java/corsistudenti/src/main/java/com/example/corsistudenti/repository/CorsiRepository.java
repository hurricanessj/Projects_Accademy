package com.example.corsistudenti.repository;

import com.example.corsistudenti.model.Corsi;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CorsiRepository extends JpaRepository<Corsi, Long> {
}
