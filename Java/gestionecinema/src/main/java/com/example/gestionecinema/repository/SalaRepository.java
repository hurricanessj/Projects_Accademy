package com.example.gestionecinema.repository;

import com.example.gestionecinema.model.Sala;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.Optional;

public interface SalaRepository extends JpaRepository<Sala, Long> {
    Optional<Sala> findByName(String name);
    Optional<Sala> findFilmGiornata(LocalDate date);

    Optional<Object> findByNome(String salaNome);
}
