package com.example.bibliotecaonline.service;

import com.example.bibliotecaonline.model.Prestito;
import com.example.bibliotecaonline.model.Utente;
import com.example.bibliotecaonline.repository.UtenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UtenteService {
    @Autowired
    UtenteRepository utenteRepository;



    public List<Utente> getAllUtenti() {
        return utenteRepository.findAll();
    }

    public Optional<Utente> getUtenteById(Long id){
        return utenteRepository.findById(id);
    }

    public Utente addUtenti(Utente newUtenti){
        return  this.utenteRepository.save(newUtenti);
    }

    public void deleteUtenti(Long id){
        this.utenteRepository.deleteById(id);
    }

    public Utente updateUtente(Long id, Utente upadatedUtente) {
        return this.utenteRepository.findById(id)
                .map(existingUtente -> {
                    existingUtente.setNomeUtente(upadatedUtente.getNomeUtente());
                    existingUtente.setEmail(upadatedUtente.getEmail());
                    return utenteRepository.save(existingUtente);
                })
                .orElseThrow(() -> new RuntimeException("utente con id " + id + " non trovato"));
    }
}
