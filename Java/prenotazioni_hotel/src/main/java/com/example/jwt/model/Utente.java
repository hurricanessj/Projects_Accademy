package com.example.jwt.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Utente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_utente;
    private String nome;
    private String cognome;
    private String email;
    private String password;

    @OneToMany(mappedBy = "utente", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Prenotazione> prenotazione = new HashSet<>();

    public Utente() {
    }

    public Long getId_utente() {
        return id_utente;
    }

    public void setId_utente(Long id_utente) {
        this.id_utente = id_utente;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Prenotazione> getPrenotazione() {
        return prenotazione;
    }

    public void setPrenotazione(Set<Prenotazione> prenotazione) {
        this.prenotazione = prenotazione;
    }
}
