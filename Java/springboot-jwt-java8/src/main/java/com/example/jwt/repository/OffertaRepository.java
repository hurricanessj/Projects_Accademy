package com.example.jwt.repository;

import com.example.jwt.model.OffertaLavoro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OffertaRepository extends JpaRepository<OffertaLavoro, Long> {
}
