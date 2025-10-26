package com.example.jwt.service;

import com.example.jwt.model.OffertaLavoro;
import com.example.jwt.repository.OffertaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OffertaLavoroService {

    @Autowired
    OffertaRepository offertaRepository;

    public List<OffertaLavoro> getallOfferte() {
        return  offertaRepository.findAll();
    }

    public OffertaLavoro addOfferta(OffertaLavoro nuovaOfferta) {
        return offertaRepository.save(nuovaOfferta);
    }

    public Optional<OffertaLavoro> updateOfferta(Long id, OffertaLavoro offertaAggiornata) {
        return offertaRepository.findById(id).map(offerta -> {
            offerta.setTitolo(offertaAggiornata.getTitolo());
            offerta.setDescrizione(offertaAggiornata.getDescrizione());
            offerta.setStato(offertaAggiornata.getStato());
            offerta.setDataPubblicazione(offertaAggiornata.getDataPubblicazione());
            return offertaRepository.save(offerta);
        });
    }

    public boolean deleteOfferta(Long id) {
        return offertaRepository.findById(id).map(offerta -> {
            offertaRepository.delete(offerta);
            return true;
        }).orElse(false);
    }
    public Optional<OffertaLavoro> getById(Long id) {
        return offertaRepository.findById(id);
    }
}
