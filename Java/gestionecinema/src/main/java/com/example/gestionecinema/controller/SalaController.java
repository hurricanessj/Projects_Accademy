package com.example.gestionecinema.controller;

import com.example.gestionecinema.model.Film;
import com.example.gestionecinema.model.Sala;
import com.example.gestionecinema.service.SalaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/sala")
public class SalaController {

    @Autowired
    SalaService salaService;

    @GetMapping("/all")
    public ResponseEntity<List<Sala>> getAllSale(){
        List<Sala> sala = this.salaService.getAllSale();
        if(sala.isEmpty()){
            return  ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(sala);
    }

    @GetMapping("/sala/{nome}")
    public ResponseEntity<Sala> getSalaByName(@PathVariable String name){
        return this.salaService.getSalaByName(name).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/sala/{nome}/film")
    public Set<Film> getFilmBySala(
            @PathVariable String nome,
            @RequestParam String giorno) {
        LocalDate date = LocalDate.parse(giorno);
        return salaService.getFilmBySalaAndDate(nome, date);
    }
}
