package com.example.esercitazione.service;

import com.example.esercitazione.Model.Cocktail;
import com.example.esercitazione.dto.CocktailRequest;
import com.example.esercitazione.dto.CocktailResponse;
import com.example.esercitazione.repository.CocktailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CocktailService {

    @Autowired
    private CocktailRepository cocktailRepository;

    public CocktailResponse cocktailRequest(String nomeCocktail, String ingrediente) {
        String messaggio = "il cocktail è: " + nomeCocktail + "e ingrediente" + ingrediente;
        return new CocktailResponse(messaggio);
    }

    public CocktailResponse cocktailResponse(String nome) {
        String msgNome = "il nome del cocktail è: " + nome;
        return new CocktailResponse(msgNome);
    }


    public CocktailResponse creaCocktail(CocktailRequest request) {
        Cocktail cocktail = new Cocktail(request.getNome(), request.getIngrediente());
        cocktailRepository.save(cocktail);
        return new CocktailResponse("salvataggio avvenuto con successo");
    }

    public CocktailResponse aggiornaCocktail(Long id, String nuovoIngrediente) {
        Cocktail cocktail = cocktailRepository.findById(id).orElseThrow(() -> new RuntimeException());
        cocktail.setIngredienti(nuovoIngrediente);
        cocktailRepository.save(cocktail);
        return new CocktailResponse("ingrediente aggiornato per cocktail : " + cocktail.getNome());
    }

    public CocktailResponse cancellaCocktail(Long id) {
        if (!cocktailRepository.existsById(id)){
            return new CocktailResponse("cocoktail non trovato");
        }
        cocktailRepository.deleteById(id);
        return new CocktailResponse("eliminato con successo");
    }
}
