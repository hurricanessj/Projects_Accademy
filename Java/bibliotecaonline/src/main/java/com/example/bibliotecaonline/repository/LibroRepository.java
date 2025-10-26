package com.example.bibliotecaonline.repository;

import com.example.bibliotecaonline.model.Libro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LibroRepository extends JpaRepository<Libro, Long> {
}
