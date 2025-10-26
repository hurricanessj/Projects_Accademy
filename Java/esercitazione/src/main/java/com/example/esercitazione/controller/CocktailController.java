package com.example.esercitazione.controller;

import com.example.esercitazione.dto.CocktailRequest;
import com.example.esercitazione.dto.CocktailResponse;
import com.example.esercitazione.service.CocktailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api")
@RestController
public class CocktailController {

    @Autowired
    CocktailService cocktailService;

    @PostMapping("/cocktail")
    public CocktailResponse prenotaCocktail(@RequestBody CocktailRequest request){
        return cocktailService.cocktailRequest(request.getNome(), request.getIngrediente());
    }

    @GetMapping("/cocktail/{nome}")
    public CocktailResponse cercaCocktail(@PathVariable String nome, @PathVariable String ingrediente){
        return cocktailService.cocktailRequest(nome, ingrediente);
    }

    @GetMapping("/info")
    public CocktailResponse getInfOCocktail(@RequestParam String nome){
        return this.cocktailService.cocktailResponse(nome);
    }

    @PostMapping("/crea")
    public CocktailResponse creaCocktail(@RequestBody CocktailRequest request){
        return  cocktailService.creaCocktail(request);
    }

    @PutMapping("/update/{id}")
    public CocktailResponse cocktailResponse(@PathVariable Long id, @RequestBody CocktailRequest request){
        return  cocktailService.aggiornaCocktail(id, request.getIngrediente());
    }

    @DeleteMapping("/delete/{id}")
    public CocktailResponse cocktailResponse(@PathVariable Long id){
        return  cocktailService.cancellaCocktail(id);
    }

}
