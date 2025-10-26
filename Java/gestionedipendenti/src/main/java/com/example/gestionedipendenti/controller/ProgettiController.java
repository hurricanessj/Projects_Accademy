package com.example.gestionedipendenti.controller;

import com.example.gestionedipendenti.model.Dipendete;
import com.example.gestionedipendenti.model.Progetti;
import com.example.gestionedipendenti.service.ProgettiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/progetti")
public class ProgettiController {

    @Autowired
    ProgettiService progettiService;

    @GetMapping("/dipendente/{id}")
    public ResponseEntity<List<Progetti>> getListProgettiByIdDipendente(@RequestParam Long id_dipendente, @RequestParam Dipendete dip){
        return progettiService.getListProgettiByIdDipendente(id_dipendente, dip);
    }

}
