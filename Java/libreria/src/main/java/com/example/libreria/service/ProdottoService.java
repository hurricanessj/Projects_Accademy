package com.example.libreria.service;

import com.example.libreria.model.Categoria;
import com.example.libreria.model.Prodotto;
import com.example.libreria.repository.CategoriaRepository;
import com.example.libreria.repository.ProdottoRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class ProdottoService {
    @Autowired
    ProdottoRepository prodottoRepository;

    public List<Prodotto> getAllprodotto() {
        return prodottoRepository.findAll();
    }

    public Optional<Prodotto> getProdottoById(Long id) {
        return prodottoRepository.findById(id);

    }

    public Prodotto addProdotto(Prodotto newProdotto) {
        return this.prodottoRepository.save(newProdotto);
    }

    public void deleteProdotto(Long id){
        this.prodottoRepository.deleteById(id);
    }

    public Prodotto updateProdotto(Long id, Prodotto updatedProdotto) {
        return this.prodottoRepository.findById(id)
                .map(existingProdotto -> {
                    existingProdotto.setNome(updatedProdotto.getNome());
                    existingProdotto.setCategoria(updatedProdotto.getCategoria());
                    return prodottoRepository.save(existingProdotto);
                })
                .orElseThrow(() -> new RuntimeException("Prodotto con id " + id + " non trovato"));
    }

}
