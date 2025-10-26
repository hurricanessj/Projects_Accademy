package com.example.jwt.controller;
import com.example.jwt.JwtUtil;
import com.example.jwt.model.Utente;
import com.example.jwt.repository.UtenteRepository;
import com.example.jwt.service.UtenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/utente")
public class UtenteController {
    @Autowired
    UtenteRepository utenteRepository;
    @Autowired
    UtenteService utenteService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String username, @RequestParam String pwd) {
        return utenteService.login(username, pwd)
                .map(u -> ResponseEntity.ok(JwtUtil.generateToken(u.getUsername())))
                .orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenziali non valide"));
    }

    @PostMapping("/register")
    public ResponseEntity<Utente> register(@RequestBody Utente utente) {
        Utente saved = utenteService.register(utente);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }


    @PostMapping("/add/utente")
    public ResponseEntity<Utente> addUtente(@RequestBody Utente newUtente){
        Utente utentiCreati = this.utenteService.addUtenti(newUtente);
        return ResponseEntity.status(HttpStatus.CREATED).body(utentiCreati);
    }

    @GetMapping("/me")
    public ResponseEntity<Utente> getMe(@AuthenticationPrincipal Utente user) {
        return ResponseEntity.ok(user);
    }

}
