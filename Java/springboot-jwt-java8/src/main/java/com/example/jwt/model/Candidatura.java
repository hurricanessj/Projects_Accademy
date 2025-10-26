package com.example.jwt.model;

import com.example.jwt.ENUM.StatoCandidatura;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
public class Candidatura {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate dataCandidatura;



    @Enumerated(EnumType.STRING)
    private StatoCandidatura statoCandidatura;

    @ManyToOne
    @JoinColumn(name = "utente_id", nullable = false)
    @JsonIgnoreProperties("listaCandidature")
    private Utente utente;

    @ManyToOne
    @JoinColumn(name = "offerta_id", nullable = false)
    @JsonIgnoreProperties("candidature")
    private OffertaLavoro offerta;

    public Candidatura() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDataCandidatura() {
        return dataCandidatura;
    }

    public void setDataCandidatura(LocalDate dataCandidatura) {
        this.dataCandidatura = dataCandidatura;
    }

    public StatoCandidatura getStatoCandidatura() {
        return statoCandidatura;
    }

    public void setStatoCandidatura(StatoCandidatura statoCandidatura) {
        this.statoCandidatura = statoCandidatura;
    }

    public Utente getUtente() {
        return utente;
    }

    public void setUtente(Utente utente) {
        this.utente = utente;
    }

    public OffertaLavoro getOfferta() {
        return offerta;
    }

    public void setOfferta(OffertaLavoro offerta) {
        this.offerta = offerta;
    }
}
