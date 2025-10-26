package com.example.jwt.controller;

import com.example.jwt.model.Hotel;
import com.example.jwt.model.Prenotazione;
import com.example.jwt.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hotel")
@CrossOrigin(origins = "http://localhost:4200")
public class HotelController {

    @Autowired
    HotelService hotelService;


    @GetMapping("/all")
    public ResponseEntity<List<Hotel>> getAllHotel(){
        List<Hotel> hotel = this.hotelService.getAllHotel();
        if(hotel.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(hotel);
    }

    @PostMapping("/add")
    public ResponseEntity<Hotel> addHotel(@RequestBody Hotel newHotel){
        Hotel hotelCreato = this.hotelService.addHotel(newHotel);
        return ResponseEntity.status(HttpStatus.CREATED).body(hotelCreato);
    }

    @PostMapping("/{id}")
    public ResponseEntity<Hotel> getHotelById(@PathVariable Long id){
        return this.hotelService.getHotelById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Hotel> upadateHotel(@PathVariable Long id, @RequestBody Hotel updatedhotel){
        try{
            Hotel hotelAggiornato = this.hotelService.upadateHotel(id, updatedhotel);
            return ResponseEntity.ok(hotelAggiornato);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteHotel(@PathVariable Long id){
        try{
            this.hotelService.deleteHotel(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.ok().build();
        }
    }

    @GetMapping("/search/{nome}")
    public ResponseEntity<Hotel> getHotelsearch(@PathVariable("nome") String nome) {
        return hotelService.getHotelByName(nome)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/stanze/hotel/{id}")
    public ResponseEntity<String> getNumeroStanze(@PathVariable("id") Long hotelId) {
        return hotelService.getNumeroStanze(hotelId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

}
