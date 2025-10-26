package com.example.libreria.controller;

import com.example.libreria.model.Categoria;
import com.example.libreria.model.Prodotto;
import com.example.libreria.service.ProdottoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/prodotto")
public class ProdottoController {
    @Autowired
    ProdottoService prodottoService;

    @GetMapping
    public ResponseEntity<List<Prodotto>> getAllProdotto(){
        List<Prodotto> prodotto =this.prodottoService.getAllprodotto();
        if(prodotto.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(prodotto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Prodotto> getAutoreById(@PathVariable Long id){
        return this.prodottoService.getProdottoById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<Prodotto> addAutore(@RequestBody Prodotto newProdotto){
        Prodotto prodottoCreato = this.prodottoService.addProdotto(newProdotto);
        return ResponseEntity.status(HttpStatus.CREATED).body(prodottoCreato);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteProdotto(@PathVariable Long id){
        try{
            this.prodottoService.deleteProdotto(id);
            return ResponseEntity.ok().build();
        } catch(RuntimeException e) {
            return ResponseEntity.ok().build();
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Prodotto> updateProdotto(@PathVariable Long id, @RequestBody Prodotto updatedProdotto) {
        try {
            Prodotto prodottoAggiornato = this.prodottoService.updateProdotto(id, updatedProdotto);
            return ResponseEntity.ok(prodottoAggiornato);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

}
