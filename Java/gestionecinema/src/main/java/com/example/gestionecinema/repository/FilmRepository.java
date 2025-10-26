package com.example.gestionecinema.repository;

import com.example.gestionecinema.model.Film;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FilmRepository extends JpaRepository<Film, Long> {
    Optional<Film> ProiezioneSalaByFilm();
}
