package com.example.archiviostudenti.dto;

public class StudenteResponse {
    private String message;

    public StudenteResponse(){}

    public StudenteResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
