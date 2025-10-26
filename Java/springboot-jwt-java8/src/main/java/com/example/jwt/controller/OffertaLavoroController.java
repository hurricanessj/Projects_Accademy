package com.example.jwt.controller;
import com.example.jwt.model.OffertaLavoro;
import com.example.jwt.service.OffertaLavoroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/offerta")
public class OffertaLavoroController {

    @Autowired
    OffertaLavoroService offertaLavoroService;

    @GetMapping
    public ResponseEntity<List<OffertaLavoro>> getAllOfferte() {
        List<OffertaLavoro> offerte = offertaLavoroService.getallOfferte();
        if (offerte.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(offerte);
    }

    @PostMapping
    public ResponseEntity<OffertaLavoro> addOfferta(@RequestBody OffertaLavoro nuovaOfferta) {
        OffertaLavoro offertaCreata = offertaLavoroService.addOfferta(nuovaOfferta);
        return ResponseEntity.status(HttpStatus.CREATED).body(offertaCreata);
    }

    @PutMapping("/{id}")
    public ResponseEntity<OffertaLavoro> updateOfferta(@PathVariable Long id, @RequestBody OffertaLavoro offertaAggiornata) {
        return offertaLavoroService.updateOfferta(id, offertaAggiornata)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteOfferta(@PathVariable Long id) {
        boolean deleted = offertaLavoroService.deleteOfferta(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
