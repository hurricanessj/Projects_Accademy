package com.example.Iscrizionimanytomany.Service;

import com.example.Iscrizionimanytomany.Model.Iscrizioni;
import com.example.Iscrizionimanytomany.Model.Studente;
import com.example.Iscrizionimanytomany.Repository.IscrizioneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CorsoService {
    @Autowired
    IscrizioneRepository iscrizioneRepository;

    public List<Studente> getStudentiByCorsoId(Long id) {
        List<Iscrizioni> iscrizioni = iscrizioneRepository.findByCorso_Id(id);
        return iscrizioni.stream()
                .map(Iscrizioni::getStudente)
                .toList();
    }
}
