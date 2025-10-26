package com.example.Iscrizionimanytomany.Controller;

import com.example.Iscrizionimanytomany.Model.Studente;
import com.example.Iscrizionimanytomany.Service.IscrizioniService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/iscrizioni")
public class IscrizioniController {

    @Autowired
    IscrizioniService iscrizioniService;


}
