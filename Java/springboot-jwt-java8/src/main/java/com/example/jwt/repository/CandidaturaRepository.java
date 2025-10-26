package com.example.jwt.repository;

import com.example.jwt.model.Candidatura;
import com.example.jwt.model.Utente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CandidaturaRepository extends JpaRepository<Candidatura, Long> {
    List<Candidatura> findByUtente(Utente utente);
}
