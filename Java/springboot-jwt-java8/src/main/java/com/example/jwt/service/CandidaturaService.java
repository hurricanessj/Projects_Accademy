package com.example.jwt.service;

import com.example.jwt.model.Candidatura;
import com.example.jwt.model.Utente;
import com.example.jwt.repository.CandidaturaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidaturaService {

    @Autowired
    private CandidaturaRepository candidaturaRepository;

    public Candidatura save(Candidatura candidatura) {
        return candidaturaRepository.save(candidatura);
    }

    public List<Candidatura> findByUtente(Utente utente) {
        return candidaturaRepository.findByUtente(utente);
    }
}
