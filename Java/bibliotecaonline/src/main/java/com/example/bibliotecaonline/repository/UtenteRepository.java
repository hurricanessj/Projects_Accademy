package com.example.bibliotecaonline.repository;

import com.example.bibliotecaonline.model.Utente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UtenteRepository extends JpaRepository<Utente, Long> {
}
