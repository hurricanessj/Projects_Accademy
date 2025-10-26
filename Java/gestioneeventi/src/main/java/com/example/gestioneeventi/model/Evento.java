package com.example.gestioneeventi.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Evento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titolo;
    private LocalDate data;
    private String luogo;

    @ManyToMany
    @JoinTable(name = "evento_utente", joinColumns = @JoinColumn(name = "evento_id"), inverseJoinColumns = @JoinColumn(name = "utente_id"))
    private Set<Utente> Setutenti = new HashSet<>();


    public Evento() {
        super();
    }

    public Evento(Long id, String titolo, LocalDate data, String luogo, Set<Utente> Setutenti) {
        super();
        this.id = id;
        this.titolo = titolo;
        this.data = data;
        this.luogo = luogo;
        this.Setutenti = Setutenti;
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

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public String getLuogo() {
        return luogo;
    }

    public void setLuogo(String luogo) {
        this.luogo = luogo;
    }

    public Set<Utente> getSetutenti() {
        return Setutenti;
    }

    public void setSetutenti(Set<Utente> setutenti) {
        Setutenti = setutenti;
    }
}