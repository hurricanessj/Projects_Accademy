package com.example.jwt.repository;

import com.example.jwt.model.Prenotazione;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrenotazioneRepo extends JpaRepository<Prenotazione, Long> {
}
