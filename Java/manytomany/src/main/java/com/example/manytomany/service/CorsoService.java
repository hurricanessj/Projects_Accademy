package com.example.manytomany.service;

import com.example.manytomany.model.Corso;
import com.example.manytomany.repository.CorsoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
@Service
public class CorsoService {
    @Autowired
    CorsoRepository corsoRepository;

    public List<Corso> findAll() {
        return corsoRepository.findAll();
    }
}
