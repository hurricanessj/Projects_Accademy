package com.example.archiviostudenti.repository;

import com.example.archiviostudenti.model.Studente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudenteRepository extends JpaRepository<Studente, Long> {
    List<Studente> findByCorsoLaurea(String corsoLaurea);

}
