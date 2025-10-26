package com.example.jwt.controller;

import com.example.jwt.model.Prenotazione;
import com.example.jwt.service.PrenotazioneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/prenotazione")
@CrossOrigin(origins = "http://localhost:4200")
public class PrenotazioneController {

    @Autowired
    PrenotazioneService prenotazioneService;

    @GetMapping("/all")
    public ResponseEntity<List<Prenotazione>> getAllPrenotazioni(){
        List<Prenotazione> utente = this.prenotazioneService.getAllPrenotazioni();
        if(utente.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(utente);
    }

    @PostMapping("/add")
    public ResponseEntity<Prenotazione> addPrenotazione(@RequestBody Prenotazione newPrenotazione){
        Prenotazione PrenotazioneCreata = this.prenotazioneService.addPrenotazione(newPrenotazione);
        return ResponseEntity.status(HttpStatus.CREATED).body(PrenotazioneCreata);
    }

    @PostMapping("/{id}")
    public ResponseEntity<Prenotazione> getPrenotazioneById(@PathVariable Long id){
        return this.prenotazioneService.getPrenotazioneById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Prenotazione> upadatePrenotazione(@PathVariable Long id, @RequestBody Prenotazione updatedPrenotazione){
        try{
            Prenotazione prenotazioneAggiornata = this.prenotazioneService.upadatePrenotazione(id, updatedPrenotazione);
            return ResponseEntity.ok(prenotazioneAggiornata);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deletePrenotazione(@PathVariable Long id){
        try{
            this.prenotazioneService.deletePrenotazione(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.ok().build();
        }
    }


}
