package com.example.bibliotecaonline.controller;


import com.example.bibliotecaonline.model.Libro;
import com.example.bibliotecaonline.model.Utente;
import com.example.bibliotecaonline.service.UtenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/utente")
public class UtenteController {
    @Autowired
    UtenteService utenteService;


    @GetMapping("/all")
    public ResponseEntity<List<Utente>> getAllUtente(){
        List<Utente> utente = this.utenteService.getAllUtenti();
        if(utente.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(utente);
    }

    @PostMapping("/add")
    public ResponseEntity<Utente> addUtente(@RequestBody Utente newUtente){
        Utente utentiCreati = this.utenteService.addUtenti(newUtente);
        return ResponseEntity.status(HttpStatus.CREATED).body(utentiCreati);
    }

    @PostMapping("/{id}")
    public ResponseEntity<Utente> getUtentiById(@PathVariable Long id){
        return this.utenteService.getUtenteById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Utente> updateUtenti(@PathVariable Long id, @RequestBody Utente updatedUtente){
        try{
            Utente utenteAggiornato = this.utenteService.updateUtente(id, updatedUtente);
            return ResponseEntity.ok(utenteAggiornato);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteUtenti(@PathVariable Long id){
        try{
            this.utenteService.deleteUtenti(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.ok().build();
        }
    }
}
