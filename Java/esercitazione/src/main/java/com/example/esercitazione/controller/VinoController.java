package com.example.esercitazione.controller;

import com.example.esercitazione.dto.VacanzaResponse;
import com.example.esercitazione.dto.VinoRequest;
import com.example.esercitazione.dto.VinoResponse;
import com.example.esercitazione.service.VinoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api3")
@RestController
public class VinoController {

    @Autowired
    private VinoService vinoService;


    @PostMapping("/aggiungi")
    public VinoResponse aggiungiVino(@RequestBody VinoRequest request){
        return  vinoService.aggiungiVino(request);
    }

    @GetMapping("/nomeVino/{nome}")
    public VinoResponse vinoNome(@PathVariable int anno){
        return vinoService.filtraViniPerAnno(anno);
    }
}
