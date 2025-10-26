package com.example.esercitazione.dto;

public class FilmResponse {
    private String message;

    public FilmResponse() {
    }

    public FilmResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
