package com.example.manytomany.model;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
public class Studente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @ManyToMany
    @JoinTable(name = "studente_corso",
            joinColumns = @JoinColumn(name = "studente_id"), inverseJoinColumns = @JoinColumn(name = "corso_id"))
    Set<Corso> corsi = new HashSet<>();

    public Studente() {

    }

    public void addCorso(Corso corsi) {
        if(this.corsi.add(corsi)){
            corsi.getStudenteList().add(this);
        }
    }

    public void removeCorso(Corso c){
        if(this.corsi.remove(c)){
            c.getStudenteList().remove(this);
        }
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Corso> getCorsi() {
        return corsi;
    }

    public void setCorsi(Set<Corso> corsi) {
        this.corsi = corsi;
    }
}
