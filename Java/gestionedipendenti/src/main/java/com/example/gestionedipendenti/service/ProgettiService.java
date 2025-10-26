package com.example.gestionedipendenti.service;

import com.example.gestionedipendenti.model.Dipendete;
import com.example.gestionedipendenti.model.Progetti;
import com.example.gestionedipendenti.repository.ProgettiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProgettiService {

    @Autowired
    ProgettiRepository progettiRepository;


//    public ResponseEntity<Progetti> getListProgettiByIdDipendente(Long idDipendente, Dipendete dip) {
//        progettiRepository.findById(idDipendente);
//        return ResponseEntity.ok().body(idDipendente);
//    }
    public ResponseEntity<List<Progetti>> getListProgettiByIdDipendente(Long idDipendente, Dipendete dip) {
        progettiRepository.findById(idDipendente);
        return ResponseEntity.ok().body(dip);
    }

}
