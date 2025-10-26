package com.example.demo.service;

import com.example.demo.dto.HelloResponse;
import org.springframework.stereotype.Service;

@Service
public class HelloService {
    public String addHello(String name) {
        return "Hello " + name;
    }

    public String getSaluti(String name) {
        if(name == null) {
            return "nessun nome inserito";
        }else {
            return "ciao "+name;
        }
    }

    public HelloResponse getSalutiDto(String name) {
        return new HelloResponse("ciao "+ name);
    }
}