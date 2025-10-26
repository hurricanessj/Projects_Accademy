package com.example.libreria.service;

import com.example.libreria.model.Autore;
import com.example.libreria.model.Libro;
import com.example.libreria.repository.AutoreRepository;
import com.example.libreria.repository.LibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public class LibroService {
    @Autowired
    private LibroRepository libroRepository;
    @Autowired
    private AutoreRepository autoreRepository;

    public Libro addAutoreToLibro(Long libroId, Long autoreId) {
        Libro lib = libroRepository.findById(libroId).orElseThrow(()-> new RuntimeException("libro non trovato"));
        Autore aut = autoreRepository.findById(autoreId).orElseThrow(()-> new RuntimeException("autore non trovato"));
        lib.setAutore(aut);
        return libroRepository.save(lib);
    }

    public List<Libro> getAllLibri() {

        return this.libroRepository.findAll();
    }

    public Optional<Libro> getLibroById(Long id) {
        return libroRepository.findById(id);
    }

    public Libro aggiungiLibro(Libro libro){
        return this.libroRepository.save(libro);
    }
}
