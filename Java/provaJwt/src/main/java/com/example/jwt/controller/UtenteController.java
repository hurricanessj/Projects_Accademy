package com.example.jwt.controller;

import com.example.jwt.model.Utente;
import com.example.jwt.service.UtenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/utente")
public class UtenteController {

    @Autowired
    UtenteService utenteService;

    @PostMapping("/add")
    public ResponseEntity<Utente> addUtente(@RequestBody Utente newUtente){
        Utente UtentiCreati = this.utenteService.addUtente(newUtente);
        return ResponseEntity.status(HttpStatus.CREATED).body(UtentiCreati);
    }

}
