package com.example.gestionecinema.service;

import com.example.gestionecinema.model.Film;
import com.example.gestionecinema.model.Sala;
import com.example.gestionecinema.repository.FilmRepository;
import com.example.gestionecinema.repository.SalaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

public class FilmService {

    @Autowired
    FilmRepository filmRepository;


    public List<Film> getAllFilm() {
        return filmRepository.findAll();
    }

    public Optional<Film> getFilmById(Long id) {
    return filmRepository.findById(id);
    }


    public Set<Sala> getSaleByFilmAndDate(Long filmId, LocalDate date) {
        return filmRepository.findById(filmId).filter(f -> date.equals(f.getData()))
                .map(Film::getSala)
                .orElse(Collections.emptySet());
    }

}
