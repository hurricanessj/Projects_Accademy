package com.example.esercitazione.controller;

import com.example.esercitazione.dto.VacanzaRequest;
import com.example.esercitazione.dto.VacanzaResponse;
import com.example.esercitazione.service.VacanzaService;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api2")
@RestController
public class VacanzaController {

    private final VacanzaService vacanzaService;

    public VacanzaController(VacanzaService vacanzaService) {
        this.vacanzaService = vacanzaService;
    }


    @PostMapping("/richiesta")
    public VacanzaResponse prenotaVacanza(@RequestBody VacanzaRequest request){
         return vacanzaService.vacanzaResponse(request.getDestinazione(), request.getGiorni());
    }

    @GetMapping("/destinazione/{nome}")
    public VacanzaResponse destinazione(@PathVariable String nome){
        return vacanzaService.destinazioneResponse(nome);
    }

    @GetMapping("/info")
    public VacanzaResponse getInfo(@RequestParam String destinazione, @RequestParam int giorni){
        return this.vacanzaService.vacanzaResponse(destinazione, giorni);
    }

}
