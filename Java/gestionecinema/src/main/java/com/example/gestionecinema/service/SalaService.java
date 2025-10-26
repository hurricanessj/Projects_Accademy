package com.example.gestionecinema.service;

import com.example.gestionecinema.model.Film;
import com.example.gestionecinema.model.Sala;
import com.example.gestionecinema.repository.SalaRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

public class SalaService {

    @Autowired
    SalaRepository salaRepository;


    public List<Sala> getAllSale() {
        return salaRepository.findAll();
    }

    public Optional<Sala> getSalaByName(String name) {
        return salaRepository.findByName(name);
    }

    public Set<Film> getFilmBySalaAndDate(String salaNome, LocalDate date) {
        return salaRepository.findByNome(salaNome)
                .map(sala -> sala.getFilm().stream()
                        .filter(f -> date.equals(f.getData()))
                        .collect(Collectors.toSet()))
                .orElse(Collections.emptySet());
    }
}
