package com.example.Iscrizionimanytomany.Repository;

import com.example.Iscrizionimanytomany.Model.Studente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudenteRepository extends JpaRepository <Studente, Long> {
}
