package com.example.Iscrizionimanytomany.Repository;

import com.example.Iscrizionimanytomany.Model.IscrizioneId;
import com.example.Iscrizionimanytomany.Model.Iscrizioni;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IscrizioneRepository extends JpaRepository<Iscrizioni, IscrizioneId> {
    List<Iscrizioni> findByCorso_Id(Long corsoId);
    @Query("SELECT i.studente.id, i.corso.id, i.voto FROM Iscrizioni i")
    List<Object[]> findAllIscrizioni();

}
