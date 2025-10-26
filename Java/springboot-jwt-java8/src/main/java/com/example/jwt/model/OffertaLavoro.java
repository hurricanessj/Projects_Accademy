package com.example.jwt.model;

import com.example.jwt.ENUM.StatoCandidatura;
import com.example.jwt.ENUM.StatoOfferta;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
public class OffertaLavoro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titolo;
    private String descrizione;
    private String azienda;
    private LocalDate dataPubblicazione;

    @Enumerated(EnumType.STRING)
    private StatoOfferta stato;

    @OneToMany(mappedBy = "offerta", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Candidatura> candidature = new HashSet<>();

    public OffertaLavoro() {
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

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public String getAzienda() {
        return azienda;
    }

    public void setAzienda(String azienda) {
        this.azienda = azienda;
    }

    public LocalDate getDataPubblicazione() {
        return dataPubblicazione;
    }

    public void setDataPubblicazione(LocalDate dataPubblicazione) {
        this.dataPubblicazione = dataPubblicazione;
    }

    public StatoOfferta getStato() {
        return stato;
    }

    public void setStato(StatoOfferta stato) {
        this.stato = stato;
    }

    public Set<Candidatura> getCandidature() {
        return candidature;
    }

    public void setCandidature(Set<Candidatura> candidature) {
        this.candidature = candidature;
    }
}

