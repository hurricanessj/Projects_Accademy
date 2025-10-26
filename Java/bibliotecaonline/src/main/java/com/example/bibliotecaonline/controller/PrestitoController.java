package com.example.bibliotecaonline.controller;

import com.example.bibliotecaonline.model.Libro;
import com.example.bibliotecaonline.model.Prestito;
import com.example.bibliotecaonline.service.PrestitoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/prestito")
public class PrestitoController {
    @Autowired
    PrestitoService prestitoService;

    @PostMapping("/add")
    public ResponseEntity<Prestito> addPrestito(@RequestBody Prestito newPrestito){
        Prestito prestitiCreati = this.prestitoService.addPrestito(newPrestito);
        return ResponseEntity.status(HttpStatus.CREATED).body(prestitiCreati);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Prestito>> getAllCorsi(){
        List<Prestito> prestito = this.prestitoService.getAllPrestiti();
        if(prestito.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(prestito);
    }

    @PostMapping("/{id}")
    public ResponseEntity<Prestito> getPrestitiById(@PathVariable Long id){
        return this.prestitoService.getPrestitoById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Prestito> updatePrestiti(@PathVariable Long id, @RequestBody Prestito updatedPrestito){
        try{
            Prestito prestitoAggiornato = this.prestitoService.updatePrestito(id, updatedPrestito);
            return ResponseEntity.ok(prestitoAggiornato);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deletePrestiti(@PathVariable Long id){
        try{
            this.prestitoService.deletePrestiti(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.ok().build();
        }
    }
}
