package com.example.archiviostudenti.controller;

import com.example.archiviostudenti.dto.StudenteRequest;
import com.example.archiviostudenti.dto.StudenteResponse;
import com.example.archiviostudenti.model.Studente;
import com.example.archiviostudenti.service.StudenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/studentiApi")
@RestController
public class StudenteController {

    @Autowired
    private StudenteService studenteService;

    @PostMapping("/crea/studente")
    public StudenteResponse creaStudente(@RequestBody StudenteRequest request) {
        return studenteService.creaStudenti(request);
    }

    @PutMapping("/cercaPerId/{id}")
    public StudenteResponse cercaPerId(@PathVariable Long id, @RequestBody StudenteRequest request) {
        return studenteService.cercaPerId(id, request);
    }


    @GetMapping("/listaStudenti/{corsoDiLaurea}")
    public List<Studente> cercaStudenti(@PathVariable String corsoDiLaurea) {
        return studenteService.listaStudenti(corsoDiLaurea);
    }



    @PutMapping("/aggiorna/{id}")
    public StudenteResponse agggiornaStudente(@PathVariable Long id, @RequestBody StudenteRequest request){
        return studenteService.aggiornaStudente(id, request);
    }

    @DeleteMapping("/delete/{id}")
    public StudenteResponse cancellaCorso(@PathVariable Long id){
        return  studenteService.deleteStudente(id);
    }

}
