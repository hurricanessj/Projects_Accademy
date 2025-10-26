package com.example.jwt.service;

import com.example.jwt.model.Utente;
import com.example.jwt.repository.UtenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UtenteService {

    @Autowired
    UtenteRepository utenteRepository;

    public Optional<Utente> login(String username, String rawPassword) {
        return utenteRepository.findByUsername(username)
                .filter(u -> u.getPwd().equals(rawPassword));
    }

    public Utente addUtenti(Utente newUtenti){
        return  this.utenteRepository.save(newUtenti);
    }

    public Utente register(Utente utente) {
        return utenteRepository.save(utente);
    }

}
