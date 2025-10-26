package com.example.esercitazione.dto;

public class VacanzaResponse {
    private String message;

    public VacanzaResponse(){
    }

    public VacanzaResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
