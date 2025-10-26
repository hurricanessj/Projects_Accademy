package com.example.corsistudenti.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Corsi {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomeCorso;
    @OneToMany(mappedBy = "corsi", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Studenti> studenti = new ArrayList<Studenti>();

    public Corsi() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeCorso() {
        return nomeCorso;
    }

    public void setNomeCorso(String nomeCorso) {
        this.nomeCorso = nomeCorso;
    }

    public List<Studenti> getStudenti() {
        return studenti;
    }

    public void setStudenti(List<Studenti> studenti) {
        this.studenti = studenti;
    }
}
