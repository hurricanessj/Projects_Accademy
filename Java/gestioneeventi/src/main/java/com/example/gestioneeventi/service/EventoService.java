package com.example.gestioneeventi.service;

import com.example.gestioneeventi.model.Evento;
import com.example.gestioneeventi.repository.EventoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventoService {

    @Autowired
    EventoRepository eventoRepository;

    public List<Evento> getAllEventi() {
        return eventoRepository.findAll();
    }

    public Optional<Evento> getEventoById(Long id){
        return eventoRepository.findById(id);
    }

    public Evento addEvento(Evento newEvento){
        return  this.eventoRepository.save(newEvento);
    }

    public void deleteLibro(Long id){
        this.eventoRepository.deleteById(id);
    }

//    public Evento updateLibro(Long id, Libro updatedLibro) {
//        return this.libroRepository.findById(id)
//                .map(existingLibro -> {
//                    existingLibro.setTitolo(updatedLibro.getTitolo());
//                    existingLibro.setAutore(updatedLibro.getAutore());
//                    return libroRepository.save(existingLibro);
//                })
//                .orElseThrow(() -> new RuntimeException("Libro con id " + id + " non trovato"));
//    }
}
