package com.example.esercitazione.repository;

import com.example.esercitazione.Model.Film;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface FilmRepository extends JpaRepository<Film, Long> {
    List<Film> findByGenere(String genere);

}
