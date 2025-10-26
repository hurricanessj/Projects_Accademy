package com.example.bibliotecaonline.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Libro implements Prestabile{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titolo;
    private String autore;

    public Libro() {
    }

    public Libro(Long id, String titolo, String autore) {
        this.id = id;
        this.titolo = titolo;
        this.autore = autore;
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

    public String getAutore() {
        return autore;
    }

    public void setAutore(String autore) {
        this.autore = autore;
    }

    @Override
    public void presta() {
        System.out.println("Il libro '" + titolo + "' di " + autore + " è stato prestato.");

    }

    @Override
    public void restituisci() {
        System.out.println("libro restituito");
    }


    @Override
    public String toString() {
        return "Libro: " + titolo + " (Autore: " + autore + ")";
    }
}
