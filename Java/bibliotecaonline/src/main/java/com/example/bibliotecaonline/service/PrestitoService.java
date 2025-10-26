package com.example.bibliotecaonline.service;

import com.example.bibliotecaonline.model.Libro;
import com.example.bibliotecaonline.model.Prestito;
import com.example.bibliotecaonline.model.Utente;
import com.example.bibliotecaonline.repository.PrestitoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PrestitoService {
    @Autowired
    PrestitoRepository prestitoRepository;


    public Prestito addPrestito(Prestito nuovoPrestito) {
        return prestitoRepository.save(nuovoPrestito);
    }

    public List<Prestito> getAllPrestiti() {
        return prestitoRepository.findAll();
    }

    public Optional<Prestito> getPrestitoById(Long id){
        return prestitoRepository.findById(id);
    }

    public Prestito addPrestiti(Prestito newPrestiti){
        return  this.prestitoRepository.save(newPrestiti);
    }

    public void deletePrestiti(Long id){
        this.prestitoRepository.deleteById(id);
    }

    public Prestito updatePrestito(Long id, Prestito upadatedPrestito) {
        return this.prestitoRepository.findById(id)
                .map(existingPrestito -> {
                    existingPrestito.setLibro(upadatedPrestito.getLibro());
                    existingPrestito.setUtente(upadatedPrestito.getUtente());
                    existingPrestito.setDataFine(upadatedPrestito.getDataFine());
                    existingPrestito.setDataInizio(upadatedPrestito.getDataInizio());
                    return prestitoRepository.save(existingPrestito);
                })
                .orElseThrow(() -> new RuntimeException("prestito con id " + id + " non trovato"));
    }
}
