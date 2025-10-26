package com.example.gestioneeventi.controller;

import com.example.gestioneeventi.model.Evento;
import com.example.gestioneeventi.service.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/evento")
public class EventoController {

    @Autowired
    EventoService eventoService;

    @GetMapping("/all")
    public ResponseEntity<List<Evento>> getAllEventi(){
        List<Evento> libri = this.eventoService.getAllEventi();
        if(libri.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(libri);
    }

    @PostMapping("/add")
    public ResponseEntity<Libro> addLibri(@RequestBody Libro newLibro){
        Libro libriCreati = this.libroService.addLibri(newLibro);
        return ResponseEntity.status(HttpStatus.CREATED).body(libriCreati);
    }

    @PostMapping("/{id}")
    public ResponseEntity<Libro> getLibriById(@PathVariable Long id){
        return this.libroService.getLibroById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Libro> updateLibro(@PathVariable Long id, @RequestBody Libro updatedLibro){
        try{
            Libro libroAggiornato = this.libroService.updateLibro(id, updatedLibro);
            return ResponseEntity.ok(libroAggiornato);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteLibro(@PathVariable Long id){
        try{
            this.libroService.deleteLibro(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.ok().build();
        }
    }

}
