package com.example.libreria.controller;

import com.example.libreria.model.Libro;
import com.example.libreria.service.LibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/libro")
public class LibriController {

    @Autowired
    private LibroService libroService;

    @PostMapping("/{libroId}/autore/{autoreId}")
    public ResponseEntity<Libro> addAutoreToLibro(@PathVariable Long libroId, @PathVariable Long autoreId) {
        try {
            Libro libroAggiornato = this.libroService.addAutoreToLibro(libroId, autoreId);
            return ResponseEntity.ok(libroAggiornato);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Libro>> getAll() {
        List<Libro> libri = libroService.getAllLibri();
        if (libri.isEmpty()) {
            ResponseEntity.noContent().build();
            return ResponseEntity.ok(libri);
        }
        return ResponseEntity.ok(libri);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Libro> getLibById(@PathVariable Long id) {
        return libroService.getLibroById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/addLibro")
    public ResponseEntity<Libro> addLibro(@RequestBody Libro libro) {
        Libro libNew = libroService.aggiungiLibro(libro);
        return ResponseEntity.status(HttpStatus.CREATED).body(libNew);
    }
}
