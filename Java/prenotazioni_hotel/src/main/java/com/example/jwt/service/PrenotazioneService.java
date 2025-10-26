package com.example.jwt.service;

import com.example.jwt.model.Prenotazione;
import com.example.jwt.repository.PrenotazioneRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PrenotazioneService {
    @Autowired
    PrenotazioneRepo prenotazioneRepo;

    public List<Prenotazione> getAllPrenotazioni() {
        return prenotazioneRepo.findAll();
    }

    public Prenotazione addPrenotazione(Prenotazione newPrenotazione) {
        return this.prenotazioneRepo.save(newPrenotazione);
    }

    public Optional<Prenotazione> getPrenotazioneById(Long id) {
        return prenotazioneRepo.findById(id);
    }

    public Prenotazione upadatePrenotazione(Long id, Prenotazione upadatedPrenotazione) {
        return this.prenotazioneRepo.findById(id)
                .map(existingPrenot -> {
                    existingPrenot.setDataPrenotazione(upadatedPrenotazione.getDataPrenotazione());
                    existingPrenot.setStatoPrenotazione(upadatedPrenotazione.getStatoPrenotazione());
                    existingPrenot.setUtente(upadatedPrenotazione.getUtente());
                    existingPrenot.setNumero_ospiti(upadatedPrenotazione.getNumero_ospiti());
                    existingPrenot.setNumero_stanze(upadatedPrenotazione.getNumero_stanze());
                    return prenotazioneRepo.save(existingPrenot);
                })
                .orElseThrow(() -> new RuntimeException("prenotazione con id " + id + " non trovata"));
    }

    public void deletePrenotazione(Long id) {
        this.prenotazioneRepo.deleteById(id);
    }

}
