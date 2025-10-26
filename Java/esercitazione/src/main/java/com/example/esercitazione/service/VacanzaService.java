package com.example.esercitazione.service;

import com.example.esercitazione.dto.VacanzaResponse;
import org.springframework.stereotype.Service;

@Service
public class VacanzaService {

    public VacanzaResponse vacanzaResponse(String destinazione, int giorni){
        String messaggio = "hai prenotato giorni "+ giorni+ "a : " +destinazione;
        return new VacanzaResponse(messaggio);
    }

    public VacanzaResponse destinazioneResponse(String destinazione){
        String msgDestinazione = "la destinazione è: "+destinazione;
        return new VacanzaResponse(msgDestinazione);
    }



}
