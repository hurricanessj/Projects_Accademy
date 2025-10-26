package com.example.archiviostudenti.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Studente {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String cognome;
    private String matricola;
    private String corsoLaurea;
    private int annoIscrizione;


    public Studente(){}

    public Studente(String nome, String cognome, String matricola, String corsoLaurea, int annoIscrizione) {
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
        this.corsoLaurea = corsoLaurea;
        this.annoIscrizione = annoIscrizione;
    }

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

    public String getMatricola() {
        return matricola;
    }

    public void setMatricola(String matricola) {
        this.matricola = matricola;
    }

    public String getCorsoLaurea() {
        return corsoLaurea;
    }

    public void setCorsoLaurea(String corsoLaurea) {
        this.corsoLaurea = corsoLaurea;
    }

    public int getAnnoIscrizione() {
        return annoIscrizione;
    }

    public void setAnnoIscrizione(int annoIscrizione) {
        this.annoIscrizione = annoIscrizione;
    }
}
