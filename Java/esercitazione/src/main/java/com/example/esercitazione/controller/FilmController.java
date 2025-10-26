package com.example.esercitazione.controller;

import com.example.esercitazione.Model.Film;
import com.example.esercitazione.dto.FilmRequest;
import com.example.esercitazione.dto.FilmResponse;
import com.example.esercitazione.service.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("filmApi")
@RestController
public class FilmController {

    @Autowired
    private FilmService filmService;

    @PostMapping("/crea/film")
    public FilmResponse creaFilm(@RequestBody FilmRequest request){
        return filmService.creaFilm(request);
    }

    @PutMapping("/cercaPerId/{id}")
    public FilmResponse cercaPerId(@RequestParam Long id, FilmRequest request){
        return filmService.cercaPerId(id, request);
    }

    @GetMapping("/Listafilm/{genere}")
    public List<Film> cercaFilm(@RequestParam String genere){
        return filmService.listaFilmGenere(genere);
    }

    @PutMapping("/update/{id}")
    public FilmResponse aggiornaFilm(@PathVariable Long id, @RequestBody FilmRequest request){
        return  filmService.aggiornaFilmService(id, request);
    }

    @DeleteMapping("/delete/{id}")
    public FilmResponse deleteFilm(@PathVariable Long id){
        return  filmService.deleteFilm(id);
    }





}
