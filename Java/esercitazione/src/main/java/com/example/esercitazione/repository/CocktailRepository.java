package com.example.esercitazione.repository;

import com.example.esercitazione.Model.Cocktail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CocktailRepository extends JpaRepository<Cocktail, Long> {

    List<Cocktail> findByNome(String nome);

}
