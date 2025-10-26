package com.example.corsistudenti.repository;

import com.example.corsistudenti.model.Studenti;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentiRepository extends JpaRepository<Studenti, Long> {
}
