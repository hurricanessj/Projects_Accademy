package com.example.corsistudenti.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class Studenti {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String cognome;
    @ManyToOne
    @JoinColumn(name = "corso_id")
    @JsonIgnore
    private Corsi corsi;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCognome() {
        return cognome;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    public Corsi getCorsi() {
        return corsi;
    }

    public void setCorsi(Corsi corsi) {
        this.corsi = corsi;
    }
}
