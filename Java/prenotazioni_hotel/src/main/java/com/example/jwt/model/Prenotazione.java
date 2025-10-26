package com.example.jwt.model;

import com.example.jwt.ENUM.StatoPrenotazione;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Prenotazione {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate dataPrenotazione;
    private int numero_ospiti;
    private int numero_stanze;

    @Enumerated(EnumType.STRING)
    private StatoPrenotazione statoPrenotazione;

    @ManyToOne
    @JoinColumn(name = "utente_id", nullable = false)
    @JsonIgnoreProperties("prenotazione")
    private Utente utente;

    @ManyToOne
    @JoinColumn(name = "hotel_id", nullable = false)
    @JsonIgnoreProperties("prenotazione")
    private Hotel hotel;

    public Prenotazione() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDataPrenotazione() {
        return dataPrenotazione;
    }

    public void setDataPrenotazione(LocalDate dataPrenotazione) {
        this.dataPrenotazione = dataPrenotazione;
    }

    public int getNumero_ospiti() {
        return numero_ospiti;
    }

    public void setNumero_ospiti(int numero_ospiti) {
        this.numero_ospiti = numero_ospiti;
    }

    public int getNumero_stanze() {
        return numero_stanze;
    }

    public void setNumero_stanze(int numero_stanze) {
        this.numero_stanze = numero_stanze;
    }

    public StatoPrenotazione getStatoPrenotazione() {
        return statoPrenotazione;
    }

    public void setStatoPrenotazione(StatoPrenotazione statoPrenotazione) {
        this.statoPrenotazione = statoPrenotazione;
    }

    public Utente getUtente() {
        return utente;
    }

    public void setUtente(Utente utente) {
        this.utente = utente;
    }

    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }
}
