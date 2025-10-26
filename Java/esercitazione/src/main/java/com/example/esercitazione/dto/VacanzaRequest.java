package com.example.esercitazione.dto;

public class VacanzaRequest {
    private String destinazione;
    private int giorni;

    public VacanzaRequest() {
    }

    public VacanzaRequest(String destinazione, int giorni) {
        this.destinazione = destinazione;
        this.giorni = giorni;
    }

    public String getDestinazione() {
        return destinazione;
    }

    public void setDestinazione(String destinazione) {
        this.destinazione = destinazione;
    }

    public int getGiorni() {
        return giorni;
    }

    public void setGiorni(int giorni) {
        this.giorni = giorni;
    }
}
