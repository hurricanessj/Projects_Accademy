package com.example.bibliotecaonline.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class BibliotecaService {

    @Autowired
    @Qualifier("emailNotifica")
    private NotificaService notificaService;

    public void avvisaScadenzaPrestito(String emailUtente, String titoloLibro){
        String messaggio = "il prestito del libro: "+titoloLibro+" sta per scadere";
        notificaService.inviaNotifica(emailUtente, messaggio);
    }



}
