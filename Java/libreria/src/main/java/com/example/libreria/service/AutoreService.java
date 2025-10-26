package com.example.libreria.service;

import com.example.libreria.model.Autore;
import com.example.libreria.repository.AutoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AutoreService {
    @Autowired
    AutoreRepository autoreRepository;

    public List<Autore> getAllAutori() {
        return autoreRepository.findAll();
    }


    public Optional<Autore> getAutoreById(Long id) {
        return autoreRepository.findById(id);
    }

    public Autore addAutore(Autore newAutore) {
        return this.autoreRepository.save(newAutore);
    }

    public void deleteAutore(Long id){
        this.autoreRepository.deleteById(id);
    }
}
