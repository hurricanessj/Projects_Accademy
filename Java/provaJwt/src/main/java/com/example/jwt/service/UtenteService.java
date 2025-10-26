package com.example.jwt.service;

import com.example.jwt.model.Utente;
import com.example.jwt.repository.UtenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UtenteService {
    @Autowired
    UtenteRepository utenteRepository;

    public Utente addUtente(Utente newUtente){
        return utenteRepository.save(newUtente);
    }
}
