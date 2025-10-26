package com.example.demo.controller;

public class HelloRequest {
    private String nome;

    public HelloRequest() {}

    public HelloRequest(String nome) {
        super();
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}