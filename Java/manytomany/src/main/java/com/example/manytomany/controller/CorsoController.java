package com.example.manytomany.controller;

import com.example.manytomany.model.Corso;
import com.example.manytomany.model.Studente;
import com.example.manytomany.service.CorsoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/corso")
public class CorsoController {
    @Autowired
    CorsoService corsoService;


    @GetMapping("/all")
    public ResponseEntity<List<Corso>> listAll(){
        return  ResponseEntity.ok(corsoService.findAll());
    }
}
