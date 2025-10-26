package com.example.esercitazione.dto;

public class FilmRequest {
    private String titolo;
    private String data;
    private String protagonista;
    private String durata;
    private String genere;

    public FilmRequest(String titolo, String data, String protagonista, String durata, String genere) {
        this.titolo = titolo;
        this.data = data;
        this.protagonista = protagonista;
        this.durata = durata;
        this.genere = genere;
    }

    public FilmRequest() {
    }

    public String getTitolo() {
        return titolo;
    }

    public void setTitolo(String titolo) {
        this.titolo = titolo;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getProtagonista() {
        return protagonista;
    }

    public void setProtagonista(String protagonista) {
        this.protagonista = protagonista;
    }

    public String getDurata() {
        return durata;
    }

    public void setDurata(String durata) {
        this.durata = durata;
    }

    public String getGenere() {
        return genere;
    }

    public void setGenere(String genere) {
        this.genere = genere;
    }
}
