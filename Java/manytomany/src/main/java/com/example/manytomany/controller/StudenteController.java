package com.example.manytomany.controller;

import com.example.manytomany.model.Studente;
import com.example.manytomany.repository.StudenteRepository;
import com.example.manytomany.service.StudenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/studenti")
public class StudenteController {

    @Autowired
    StudenteService studenteService;

    @GetMapping("/all")
    public ResponseEntity<List<Studente>> ListAll(){
        return  ResponseEntity.ok(studenteService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Studente> getLibriById(@PathVariable Long id){
        return this.studenteService.getStudenteById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
}
