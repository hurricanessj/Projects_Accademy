package com.example.manytomany.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class Corso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    @ManyToMany(mappedBy = "corsi")
    Set<Studente> studenteList = new HashSet<Studente>();

    public Corso() {
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

    public Set<Studente> getStudenteList() {
        return studenteList;
    }

    public void setStudenteList(Set<Studente> studenteList) {
        this.studenteList = studenteList;
    }
}
