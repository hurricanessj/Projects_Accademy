package com.example.Iscrizionimanytomany.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
public class Corso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    @OneToMany(mappedBy = "corso")
    @JsonIgnoreProperties("corso")
    private Set<Iscrizioni> iscrizioni = new HashSet<>();

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

    public Set<Iscrizioni> getIscrizioni() {
        return iscrizioni;
    }

    public void setIscrizioni(Set<Iscrizioni> iscrizioni) {
        this.iscrizioni = iscrizioni;
    }
}
