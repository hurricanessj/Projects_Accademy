package com.example.libreria.controller;

import com.example.libreria.model.Autore;
import com.example.libreria.service.AutoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/autore")
public class AutoriController {
    @Autowired
    private AutoreService autoreService;

    @GetMapping("/all")
    public ResponseEntity<List<Autore>> getAllAutori(){
        List<Autore> autori =this.autoreService.getAllAutori();
        if(autori.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(autori);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Autore> getAutoreById(@PathVariable Long id){
        return this.autoreService.getAutoreById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<Autore> addAutore(@RequestBody Autore newAutore){
        Autore autoreCreato = this.autoreService.addAutore(newAutore);
        return ResponseEntity.status(HttpStatus.CREATED).body(autoreCreato);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteAutore(@PathVariable Long id){
        try{
            this.autoreService.deleteAutore(id);
            return ResponseEntity.ok().build();
        } catch(RuntimeException e) {
            return ResponseEntity.ok().build();
        }
    }

}
