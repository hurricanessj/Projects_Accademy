package com.example.jwt.repository;

import com.example.jwt.model.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface HotelRepository extends JpaRepository<Hotel, Long> {
    Optional<Hotel> findByNomeHotel(String nomeHotel);


}
