package com.example.corsistudenti.controller;

import com.example.corsistudenti.model.Studenti;
import com.example.corsistudenti.service.StudentiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/studenti")
public class StudentiController {
    @Autowired
    StudentiService studentiService;

    @GetMapping("/all")
    public ResponseEntity<List<Studenti>> getAllStudenti(){
        List<Studenti> studente = this.studentiService.getAllStudenti();
        if(studente.isEmpty()){
            return ResponseEntity.ok(studente);
        }
        return ResponseEntity.ok(studente);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Studenti> getStudenteById(@PathVariable Long id){
        return this.studentiService.getStudentiById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<Studenti> addAutore(@RequestBody Studenti newStudenti){
        Studenti sudenteCreato = this.studentiService.addStudente(newStudenti);
        return ResponseEntity.status(HttpStatus.CREATED).body(sudenteCreato);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteStudente(@PathVariable Long id){
        try{
            this.studentiService.deleteStudente(id);
            return ResponseEntity.ok().build();
        } catch(RuntimeException e) {
            return ResponseEntity.ok().build();
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Studenti> updateStudente(@PathVariable Long id, @RequestBody Studenti updatedStudente){
        try{
            Studenti sudenteAggiornato = this.studentiService.updateStudente(id, updatedStudente);
            return ResponseEntity.ok(sudenteAggiornato);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
