package com.example.gestionecinema.controller;

import com.example.gestionecinema.model.Film;
import com.example.gestionecinema.model.Sala;
import com.example.gestionecinema.service.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/film")
public class FilmController {
    @Autowired
    FilmService filmService;

    @GetMapping("/allfilm")
    public ResponseEntity<List<Film>> getAllfilm(){
        List<Film> film = this.filmService.getAllFilm();
        if(film.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(film);
    }

    @GetMapping("/film/{id}")
    public ResponseEntity<Film> getFilmById(@PathVariable Long id){
        return  this.filmService.getFilmById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }



    @GetMapping("/{id}/sale")
    public Set<Sala> getSaleByFilm(
            @PathVariable Long id,
            @RequestParam String giorno) {
        LocalDate date = LocalDate.parse(giorno);
        return filmService.getSaleByFilmAndDate(id, date);
    }




}
