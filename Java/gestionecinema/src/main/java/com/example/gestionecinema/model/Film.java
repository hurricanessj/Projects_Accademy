package com.example.gestionecinema.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Film {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titolo;
    private String durataMinuti;
    private LocalDate data;
    @ManyToMany
    @JoinTable(name = "film_sala",
            joinColumns = @JoinColumn(name = "film_id"), inverseJoinColumns = @JoinColumn(name = "sala_id"))
    Set<Sala> sala = new HashSet<>();

    public Film() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitolo() {
        return titolo;
    }

    public void setTitolo(String titolo) {
        this.titolo = titolo;
    }

    public String getDurataMinuti() {
        return durataMinuti;
    }

    public void setDurataMinuti(String durataMinuti) {
        this.durataMinuti = durataMinuti;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public Set<Sala> getSala() {
        return sala;
    }

    public void setSala(Set<Sala> sala) {
        this.sala = sala;
    }
}
