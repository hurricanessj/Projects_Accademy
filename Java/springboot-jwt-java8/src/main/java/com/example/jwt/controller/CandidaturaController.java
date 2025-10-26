package com.example.jwt.controller;

import com.example.jwt.model.Candidatura;
import com.example.jwt.model.OffertaLavoro;
import com.example.jwt.model.Utente;
import com.example.jwt.service.CandidaturaService;
import com.example.jwt.service.OffertaLavoroService;
import com.example.jwt.service.UtenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/candidatura")
public class CandidaturaController {

    @Autowired
    private CandidaturaService candidaturaService;
    @Autowired
    private OffertaLavoroService offertaLavoroService;
    @Autowired
    private UtenteService utenteService;

    @PostMapping("/candidature")
    public ResponseEntity<Candidatura> candidarsi(
            @RequestParam Long offertaId,
            @AuthenticationPrincipal Utente utenteLoggato) {

        if (utenteLoggato.getEnumRuolo().name().equals("AZIENDA")) {
            return ResponseEntity.status(403).build();
        }

        OffertaLavoro offerta = offertaLavoroService.getById(offertaId)
                .orElseThrow(() -> new RuntimeException("Offerta non trovata"));

        Candidatura candidatura = new Candidatura();
        candidatura.setUtente(utenteLoggato);
        candidatura.setOfferta(offerta);
        candidatura.setDataCandidatura(LocalDate.now());
        candidatura.setStatoCandidatura(com.example.jwt.ENUM.StatoCandidatura.INVIATA);

        Candidatura salvata = candidaturaService.save(candidatura);
        return ResponseEntity.ok(salvata);
    }

    @GetMapping("/mie")
    public ResponseEntity<List<Candidatura>> mieCandidature(@AuthenticationPrincipal Utente utenteLoggato) {
        List<Candidatura> lista = candidaturaService.findByUtente(utenteLoggato);
        return ResponseEntity.ok(lista);
    }

}
