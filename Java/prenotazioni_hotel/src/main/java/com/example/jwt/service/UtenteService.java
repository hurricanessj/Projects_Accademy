package com.example.jwt.service;

import com.example.jwt.model.Utente;
import com.example.jwt.repository.UtenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UtenteService {

    @Autowired
    UtenteRepository utenteRepository;

    public Optional<Utente> login(String email, String rawPassword) {
        return utenteRepository.findByEmail(email)
                .filter(u -> u.getPassword().equals(rawPassword));
    }


    public Utente register(Utente utente) {
        return utenteRepository.save(utente);
    }

    public List<Utente> getAllUtenti() {
        return utenteRepository.findAll();
    }

    public Utente addUtenti(Utente newUtenti) {
        return this.utenteRepository.save(newUtenti);
    }

    public Optional<Utente> getUtenteById(Long id) {
        return utenteRepository.findById(id);
    }

    public Utente updateUtente(Long id, Utente upadatedUtente) {
        return this.utenteRepository.findById(id)
                .map(existingUtente -> {
                    existingUtente.setNome(upadatedUtente.getNome());
                    existingUtente.setCognome(upadatedUtente.getCognome());
                    existingUtente.setPassword(upadatedUtente.getPassword());
                    existingUtente.setPrenotazione(upadatedUtente.getPrenotazione());
                    existingUtente.setEmail(upadatedUtente.getEmail());
                    return utenteRepository.save(existingUtente);
                })
                .orElseThrow(() -> new RuntimeException("utente con id " + id + " non trovato"));
    }

    public void deleteUtenti(Long id) {
        this.utenteRepository.deleteById(id);
    }

}
