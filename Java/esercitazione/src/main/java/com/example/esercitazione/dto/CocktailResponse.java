package com.example.esercitazione.dto;

public class CocktailResponse {
    private String message;

    public CocktailResponse() {
    }

    public CocktailResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
