package com.example.esercitazione.dto;

public class CocktailRequest {
    private String nome;
    private String ingrediente;

    public CocktailRequest() {
    }

    public CocktailRequest(String nome, String ingrediente) {
        this.nome = nome;
        this.ingrediente = ingrediente;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getIngrediente() {
        return ingrediente;
    }

    public void setIngredienti(String ingrediente) {
        this.ingrediente = this.ingrediente;
    }
}
