package com.example.jwt.service;

import com.example.jwt.model.Hotel;
import com.example.jwt.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class HotelService {

    @Autowired
    HotelRepository hotelRepository;

    public List<Hotel> getAllHotel() {
        return hotelRepository.findAll();
    }

    public Hotel addHotel(Hotel newHotel) {
        return this.hotelRepository.save(newHotel);
    }

    public Optional<Hotel> getHotelById(Long id) {
        return hotelRepository.findById(id);
    }

    public Hotel upadateHotel(Long id, Hotel upadatedHotel) {
        return this.hotelRepository.findById(id)
                .map(existingHotel -> {
                    existingHotel.setNomeHotel(upadatedHotel.getNomeHotel());
                    existingHotel.setCitta(upadatedHotel.getCitta());
                    existingHotel.setIndirizzo(upadatedHotel.getIndirizzo());
                    existingHotel.setNumero_stelle(upadatedHotel.getNumero_stelle());
                    existingHotel.setPrenotazione(upadatedHotel.getPrenotazione());
                    return hotelRepository.save(existingHotel);
                })
                .orElseThrow(() -> new RuntimeException("Hotel con id " + id + " non trovato"));
    }

    public void deleteHotel(Long id) {
        this.hotelRepository.deleteById(id);
    }

    public Optional<Hotel> getHotelByName(String hotelName) {
        return hotelRepository.findByNomeHotel(hotelName);
    }

    public Optional<String> getNumeroStanze(Long hotelId) {
        return hotelRepository.findById(hotelId)
                .map(hotel -> "Numero stanze disponibili: " + hotel.getNumeroStanze());
    }
}
