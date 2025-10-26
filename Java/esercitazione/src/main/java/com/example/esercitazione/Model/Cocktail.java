package com.example.esercitazione.Model;

import jakarta.persistence.*;

import java.util.List;


@Entity
public class Cocktail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String ingrediente;

    public Cocktail() {
    }

    public Cocktail(String nome, String ingrediente) {
        this.nome = nome;
        this.ingrediente = ingrediente;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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
        this.ingrediente = ingrediente;
    }
}
