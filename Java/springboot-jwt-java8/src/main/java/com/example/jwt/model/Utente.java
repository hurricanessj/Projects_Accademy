package com.example.jwt.model;

import com.example.jwt.ENUM.UtenteRuolo;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Utente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String cognome;
    private String username;
    private String pwd;

    @Enumerated(EnumType.STRING)
    private UtenteRuolo enumRuolo;

    @OneToMany(mappedBy = "utente", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Candidatura> listaCandidature = new HashSet<>();

    public Utente() {
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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public UtenteRuolo getEnumRuolo() {
        return enumRuolo;
    }

    public void setEnumRuolo(UtenteRuolo enumRuolo) {
        this.enumRuolo = enumRuolo;
    }

    public Set<Candidatura> getListaCandidature() {
        return listaCandidature;
    }

    public void setListaCandidature(Set<Candidatura> listaCandidature) {
        this.listaCandidature = listaCandidature;
    }
}
