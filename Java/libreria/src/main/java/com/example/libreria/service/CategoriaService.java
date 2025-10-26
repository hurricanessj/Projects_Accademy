package com.example.libreria.service;

import com.example.libreria.model.Autore;
import com.example.libreria.model.Categoria;
import com.example.libreria.model.Prodotto;
import com.example.libreria.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService {
    @Autowired
    CategoriaRepository categoriaRepository;

    public List<Categoria> getAllcategoria() {
        return categoriaRepository.findAll();

    }

    public Optional<Categoria> getCategotiaById(Long id) {
        return categoriaRepository.findById(id);
    }

    public Categoria addCategoria(Categoria newCategoria) {
        return this.categoriaRepository.save(newCategoria);
    }

    public void deleteCategoria(Long id){
        this.categoriaRepository.deleteById(id);
    }


}
