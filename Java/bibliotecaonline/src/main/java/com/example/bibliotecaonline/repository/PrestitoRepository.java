package com.example.bibliotecaonline.repository;

import com.example.bibliotecaonline.model.Prestito;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PrestitoRepository extends JpaRepository <Prestito, Long> {
}
