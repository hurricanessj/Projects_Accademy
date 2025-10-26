package com.example.corsistudenti.service;

import com.example.corsistudenti.model.Studenti;
import com.example.corsistudenti.repository.StudentiRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class StudentiService {

    @Autowired
    StudentiRepository studentiRepository;

    public List<Studenti> getAllStudenti() {
        return studentiRepository.findAll();
    }

    public Optional<Studenti> getStudentiById(Long id) {
        return studentiRepository.findById(id);
    }


    public Studenti addStudente(Studenti newStudente) {
        return this.studentiRepository.save(newStudente);
    }

    public void deleteStudente(Long id) {
        this.studentiRepository.deleteById(id);
    }

    public Studenti updateStudente(Long id, Studenti updatedStudente) {
        return this.studentiRepository.findById(id)
                .map(existingStudente -> {
                    existingStudente.setNome(updatedStudente.getNome());
                    existingStudente.setCognome(updatedStudente.getCognome());
                    existingStudente.setCorsi(updatedStudente.getCorsi());

                    return studentiRepository.save(existingStudente);
                })
                .orElseThrow(() -> new RuntimeException("Studente con id " + id + " non trovato"));
    }
}
