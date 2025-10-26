package com.example.esercitazione.service;

import com.example.esercitazione.Model.Film;
import com.example.esercitazione.dto.FilmRequest;
import com.example.esercitazione.dto.FilmResponse;
import com.example.esercitazione.repository.FilmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FilmService {

    @Autowired
    private FilmRepository filmRepository;

    public FilmResponse creaFilm(FilmRequest request) {
        Film film = new Film(request.getTitolo(), request.getData(), request.getProtagonista(), request.getDurata(), request.getGenere());
        filmRepository.save(film);
        return new FilmResponse("film creato con successo");
    }


    public FilmResponse cercaPerId(Long id, FilmRequest request) {
        if (!filmRepository.existsById(id)) {
            return new FilmResponse("il film con id: " + id + " è =" + request.getTitolo());
        } else {
            return new FilmResponse("film non trovato");
        }
    }

    public FilmResponse deleteFilm(Long id) {
        if (!filmRepository.existsById(id)) {
            return new FilmResponse("film non trovato");
        }
        filmRepository.deleteById(id);
        return new FilmResponse("eliminato con successo");
    }

    public FilmResponse aggiornaFilmService(Long id, FilmRequest request) {
        Film film = filmRepository.findById(id).orElseThrow(() -> new RuntimeException());
        film.setDurata(request.getDurata());
        film.setData(request.getData());
        filmRepository.save(film);
        return new FilmResponse("film aggiornato " + film.getTitolo());
    }


    public List<Film> listaFilmGenere(String genere) {
        List<Film> listaFilm= new ArrayList<>();
        listaFilm = filmRepository.findByGenere(genere);
        return listaFilm;
    }
}

