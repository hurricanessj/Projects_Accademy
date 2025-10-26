package com.example.corsistudenti.controller;

import com.example.corsistudenti.model.Corsi;
import com.example.corsistudenti.service.CorsiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/corsi")
public class CorsiController {
    @Autowired
    CorsiService corsiService;

    @GetMapping("/all")
    public ResponseEntity<List<Corsi>> getAllCorsi(){
        List<Corsi> corsi = this.corsiService.getAllCorsi();
        if(corsi.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(corsi);
    }

    @PostMapping("/add")
    public ResponseEntity<Corsi> addCorsi(@RequestBody Corsi newCorsi){
        Corsi corsiCreati = this.corsiService.addCorsi(newCorsi);
        return ResponseEntity.status(HttpStatus.CREATED).body(corsiCreati);
    }

    @PostMapping("/{id}")
    public ResponseEntity<Corsi> getCorsiById(@PathVariable Long id){
        return this.corsiService.getCorsiById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Corsi> updateCorsi(@PathVariable Long id, @RequestBody Corsi updatedCorso){
        try{
            Corsi corsoAggiornato = this.corsiService.updateCorso(id, updatedCorso);
            return ResponseEntity.ok(corsoAggiornato);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteCorsi(@PathVariable Long id){
        try{
            this.corsiService.deleteCorsi(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.ok().build();
        }
    }

}
