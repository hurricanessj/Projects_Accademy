package com.example.libreria.controller;

import com.example.libreria.model.Categoria;
import com.example.libreria.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categoria")
public class CategoriaController {
    @Autowired
    CategoriaService categoriaService;

    @GetMapping("/all")
    public ResponseEntity<List<Categoria>> getAllCategoria(){
        List<Categoria> categoria =this.categoriaService.getAllcategoria();
        if(categoria.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(categoria);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Categoria> getAutoreById(@PathVariable Long id){
        return this.categoriaService.getCategotiaById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<Categoria> addCategoria(@RequestBody Categoria newCategoria){
        Categoria categoriaCreata = this.categoriaService.addCategoria(newCategoria);
        return ResponseEntity.status(HttpStatus.CREATED).body(categoriaCreata);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteCategoria(@PathVariable Long id){
        try{
            this.categoriaService.deleteCategoria(id);
            return ResponseEntity.ok().build();
        } catch(RuntimeException e) {
            return ResponseEntity.ok().build();
        }
    }
}
