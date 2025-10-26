package com.example.bibliotecaonline.service;

import com.example.bibliotecaonline.model.Libro;
import com.example.bibliotecaonline.model.Utente;
import com.example.bibliotecaonline.repository.LibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class LibroService {
    @Autowired
    LibroRepository libroRepository;

    public List<Libro> getAllLibri() {
        return libroRepository.findAll();
    }

    public Optional<Libro> getLibroById(Long id){
        return libroRepository.findById(id);
    }

    public Libro addLibri(Libro newLibri){
        return  this.libroRepository.save(newLibri);
    }

    public void deleteLibro(Long id){
        this.libroRepository.deleteById(id);
    }

    public Libro updateLibro(Long id, Libro updatedLibro) {
        return this.libroRepository.findById(id)
                .map(existingLibro -> {
                    existingLibro.setTitolo(updatedLibro.getTitolo());
                    existingLibro.setAutore(updatedLibro.getAutore());
                    return libroRepository.save(existingLibro);
                })
                .orElseThrow(() -> new RuntimeException("Libro con id " + id + " non trovato"));
    }
}
