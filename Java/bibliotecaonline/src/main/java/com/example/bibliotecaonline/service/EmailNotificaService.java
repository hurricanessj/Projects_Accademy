package com.example.bibliotecaonline.service;

import org.springframework.stereotype.Service;

@Service
public class EmailNotificaService implements NotificaService{

    @Override
    public void inviaNotifica(String destinatario, String messaggio) {
        System.out.println("Invio email a " + destinatario + ": " + messaggio);
    }
}
