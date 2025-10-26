package com.example.manytomany.service;

import com.example.manytomany.model.Studente;
import com.example.manytomany.repository.StudenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudenteService {
    @Autowired
    StudenteRepository studenteRepository;


    public List<Studente> findAll() {
        return studenteRepository.findAll();
    }

    public Optional<Studente> getStudenteById(Long id){
        return studenteRepository.findById(id);
    }

}
