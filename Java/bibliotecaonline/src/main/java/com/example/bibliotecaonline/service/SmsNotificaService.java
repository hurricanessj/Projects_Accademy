package com.example.bibliotecaonline.service;

import org.springframework.stereotype.Service;

@Service
public class SmsNotificaService implements NotificaService{
    @Override
    public void inviaNotifica(String destinatario, String messaggio) {
        System.out.println("invio sms a:"+destinatario+" "+messaggio);
    }
}
