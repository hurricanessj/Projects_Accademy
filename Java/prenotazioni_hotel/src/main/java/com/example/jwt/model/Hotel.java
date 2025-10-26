package com.example.jwt.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Hotel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomeHotel;
    private String citta;
    private int numero_stelle;
    private String indirizzo;
    private String numeroStanze;

    @OneToMany(mappedBy = "hotel", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Prenotazione> prenotazione = new HashSet<>();

    public Hotel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeHotel() {
        return nomeHotel;
    }

    public void setNomeHotel(String nomeHotel) {
        this.nomeHotel = nomeHotel;
    }

    public String getCitta() {
        return citta;
    }

    public void setCitta(String citta) {
        this.citta = citta;
    }

    public Set<Prenotazione> getPrenotazione() {
        return prenotazione;
    }

    public void setPrenotazione(Set<Prenotazione> prenotazione) {
        this.prenotazione = prenotazione;
    }

    public int getNumero_stelle() {
        return numero_stelle;
    }

    public void setNumero_stelle(int numero_stelle) {
        this.numero_stelle = numero_stelle;
    }

    public String getIndirizzo() {
        return indirizzo;
    }

    public void setIndirizzo(String indirizzo) {
        this.indirizzo = indirizzo;
    }

    public String getNumeroStanze() {
        return numeroStanze;
    }

    public void setNumeroStanze(String numeroStanze) {
        this.numeroStanze = numeroStanze;
    }
}
