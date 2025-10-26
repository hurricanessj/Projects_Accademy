package com.example.Iscrizionimanytomany.Repository;

import com.example.Iscrizionimanytomany.Model.Corso;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CorsoRepository extends JpaRepository<Corso, Long> {
}
