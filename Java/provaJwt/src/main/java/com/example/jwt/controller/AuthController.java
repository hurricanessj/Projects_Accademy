package com.example.jwt.controller;

import com.example.jwt.JwtUtil;
import com.example.jwt.model.Utente;
import com.example.jwt.repository.UtenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UtenteRepository utenteRepository;

//    @PostMapping("/login")
//    public String login(@RequestParam String username, @RequestParam String password) {
//        if ("user".equals(username) && "pass".equals(password)) {
//            return JwtUtil.generateToken(username);
//        }
//        return "Credenziali non valide!";
//    }

    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password) {
        return utenteRepository.findByUsername(username)
                .filter(utente -> utente.getPwd().equals(password))
                .map(utente -> JwtUtil.generateToken(username))
                .orElse("Credenziali non valide!");
    }
}
