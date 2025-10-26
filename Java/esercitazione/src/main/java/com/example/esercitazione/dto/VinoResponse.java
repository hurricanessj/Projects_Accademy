package com.example.esercitazione.dto;

public class VinoResponse {
    private String message;

    public VinoResponse() {
    }

    public VinoResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
