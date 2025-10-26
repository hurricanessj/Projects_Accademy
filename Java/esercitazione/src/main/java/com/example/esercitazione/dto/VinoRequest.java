package com.example.esercitazione.dto;

public class VinoRequest {
    private String nome;
    private int anno;
    private String nazione;

    public VinoRequest() {
    }

    public VinoRequest(String nome, int anno, String nazione) {
        this.nome = nome;
        this.anno = anno;
        this.nazione = nazione;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getAnno() {
        return anno;
    }

    public void setAnno(int anno) {
        this.anno = anno;
    }

    public String getNazione() {
        return nazione;
    }

    public void setNazione(String nazione) {
        this.nazione = nazione;
    }
}
