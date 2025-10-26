package com.example.Iscrizionimanytomany.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
public class Iscrizioni {


    @EmbeddedId
    private IscrizioneId id = new IscrizioneId();

    @ManyToOne
    @MapsId("studenteId")
    @JoinColumn(name = "studente_id")
    @JsonIgnoreProperties("iscrizioni")
    private Studente studente;

    @ManyToOne
    @MapsId("corsoId")
    @JoinColumn(name = "corso_id")
    @JsonIgnoreProperties("iscrizioni")
    private Corso corso;

    private String voto;

    public IscrizioneId getId() {
        return id;
    }

    public void setId(IscrizioneId id) {
        this.id = id;
    }

    public Studente getStudente() {
        return studente;
    }

    public void setStudente(Studente studente) {
        this.studente = studente;
    }

    public Corso getCorso() {
        return corso;
    }

    public void setCorso(Corso corso) {
        this.corso = corso;
    }

    public String getVoto() {
        return voto;
    }

    public void setVoto(String voto) {
        this.voto = voto;
    }
}
