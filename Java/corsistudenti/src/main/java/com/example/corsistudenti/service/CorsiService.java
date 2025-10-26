package com.example.corsistudenti.service;

import com.example.corsistudenti.model.Corsi;
import com.example.corsistudenti.repository.CorsiRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class CorsiService {
    @Autowired
    CorsiRepository corsiRepository;
    public List<Corsi> getAllCorsi() {
        return corsiRepository.findAll();
    }

    public Optional<Corsi> getCorsiById(Long id){
        return corsiRepository.findById(id);
    }

    public Corsi addCorsi(Corsi newCorsi){
        return  this.corsiRepository.save(newCorsi);
    }

    public void deleteCorsi(Long id){
        this.corsiRepository.deleteById(id);
    }

    public Corsi updateCorso(Long id, Corsi updatedCorso) {
        return this.corsiRepository.findById(id)
                .map(existingCorso -> {
                    existingCorso.setNomeCorso(updatedCorso.getNomeCorso());
                    existingCorso.setStudenti(updatedCorso.getStudenti());
                    return corsiRepository.save(existingCorso);
                })
                .orElseThrow(() -> new RuntimeException("Corso con id " + id + " non trovato"));
    }
}
