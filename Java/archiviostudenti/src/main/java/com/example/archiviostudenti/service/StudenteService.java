package com.example.archiviostudenti.service;

import com.example.archiviostudenti.dto.StudenteRequest;
import com.example.archiviostudenti.dto.StudenteResponse;
import com.example.archiviostudenti.model.Studente;
import com.example.archiviostudenti.repository.StudenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudenteService {

    @Autowired
    private StudenteRepository studenteRepository;

    public StudenteResponse creaStudenti(StudenteRequest request) {
        Studente studente = new Studente(
                request.getNome(),
                request.getCognome(),
                request.getMatricola(),
                request.getCorsoLaurea(),
                request.getAnnoIscrizione()
        );
        studenteRepository.save(studente);
        return new StudenteResponse("lo studente è stato creato");
    }

    public StudenteResponse cercaPerId(Long id, StudenteRequest request) {
        if (!studenteRepository.existsById(id)) {
            return new StudenteResponse("lo studente con id: " + id + " è = " + request.getNome());
        } else {
            return new StudenteResponse("Studente non trovato");
        }
    }

    public List<Studente> listaStudenti(String corsoDiLaurea) {
        List<Studente> listaStudente= new ArrayList<>();
        listaStudente = studenteRepository.findByCorsoLaurea(corsoDiLaurea);
        return listaStudente;
    }

    public StudenteResponse aggiornaStudente(Long id,StudenteRequest request) {
        Studente studente = studenteRepository.findById(id).orElseThrow(() -> new RuntimeException());
        studente.setAnnoIscrizione(request.getAnnoIscrizione());
        studenteRepository.save(studente);
        return new StudenteResponse("studente aggiornato ");
    }

    public StudenteResponse deleteStudente(Long id) {
        if (!studenteRepository.existsById(id)) {
            return new StudenteResponse("studente non trovato");
        }
        studenteRepository.deleteById(id);
        return new StudenteResponse("eliminato con successo");
    }
}
